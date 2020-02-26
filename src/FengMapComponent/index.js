import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import fengmapSDK from 'fengmap'
import {
  FengmapBase,
  FengmapNavigation,
  FengmapFloorControl,
  Fengmap3DControl,
  FengmapCompassControl,
  FengmapResetControl,
  FengmapZoomControl,
  FengmapRotateControl
} from 'react-fengmap'
import _ from 'lodash'

// eslint-disable-next-line no-unused-vars
import styles from './index.less'

class Map extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      endPoint: null,
      navigation: props.navigation
    }

    this.fengBaseRef = React.createRef()
  }

  componentDidMount() {
    const { navigation } = this.props
    this.setState({ navigation })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      !_.isEqual(prevProps.authMapFeat, this.props.authMapFeat) ||
      !_.isEqual(prevProps.navigation, this.props.navigation) ||
      !_.isEqual(prevProps.mapOptionsNoPack, this.props.mapOptionsNoPack)
    ) {
      setTimeout(() => {
        this.fengBaseRef.current._destroy()
        this.fengBaseRef.current._loadMap(this.props.mapOptionsToMapPack.mapId)
      }, 0)
    }
  }

  _onMapLoaded = (e, map) => {
    const { authMapFeat, onLoadComplete, mapOptionsNoPack } = this.props

    //隐藏公共设施标注
    //获取当前聚焦楼层
    var group = map.getFMGroup(map.focusGroupID)
    //遍历图层
    group.traverse(function(fm) {
      // 隐藏公共设施标注
      if (
        fm.nodeType === mapOptionsNoPack.publicMarkNodeType &&
        !authMapFeat.includes('public-mark')
      ) {
        fm.show = false
      }

      // 隐藏工位信息
      if (fm.nodeType === mapOptionsNoPack.textMarkNodeType && !authMapFeat.includes('text-mark')) {
        fm.show = false
      }
    })

    onLoadComplete && onLoadComplete(e, map, fengmapSDK)
  }

  _mapClickNode = (e, map) => {
    if (!e.FID) {
      return
    }
    clearTimeout(this.clickNodemap)

    const { pointObj, navigation, authMapFeat } = this.props
    const {
      options: { x, y }
    } = pointObj[navigation.floorLevel]

    if (e.x === x && e.y === y) {
      this.setState({ endPoint: null })
      return
    }

    if (authMapFeat.includes('2/3D')) {
      let map3DControl = document.getElementsByClassName('fm-control-tool-3d')
      let mapIndoor3DControl = map3DControl[0]
      let mapIndoor3DMode = map.viewMode
      if (mapIndoor3DControl && mapIndoor3DMode !== 'top') {
        mapIndoor3DControl.click()
      }
    }

    map.moveTo({ x: e.mapCoord.x, y: e.mapCoord.y, groupID: map.focusGroupID })
    this.setState({
      endPoint: {
        options: {
          x: e.x,
          y: e.y,
          groupID: map.focusGroupID,
          url: '/assets/endPointes.svg',
          size: 50,
          height: 2
        }
      }
    })

    this.clickNodemap = setTimeout(() => {
      this.setState({ endPoint: null })
      map.moveToCenter()
      if (authMapFeat.includes('2/3D')) {
        let map3DControl = document.getElementsByClassName('fm-control-tool-3d')
        let mapIndoor3DControl = map3DControl[0]
        let mapIndoor3DMode = map.viewMode
        if (mapIndoor3DControl && mapIndoor3DMode === 'top') {
          mapIndoor3DControl.click()
        }
      }
    }, 10000)

    const { onMapClickNode } = this.props
    onMapClickNode && onMapClickNode(e, map, fengmapSDK)
  }

  _onFocusGroupIDChanged = (value, map) => {
    const { focusFloor } = map

    if (focusFloor) {
      this.setState(state => ({
        navigation: {
          ...state.navigation,
          floorLevel: focusFloor
        },
        endPoint: null
      }))
    }
  }

  render() {
    const {
      width,
      height,
      authMapFeat,
      pointObj,
      mapOptionsNoPack,
      mapOptionsToMapPack
    } = this.props

    const { navigation } = this.state
    const startPoint = pointObj[navigation.floorLevel]

    const { endPoint } = this.state

    return (
      <FengmapBase
        ref={this.fengBaseRef}
        fengmapSDK={fengmapSDK}
        mapId={mapOptionsToMapPack.mapId}
        mapOptions={{
          ...mapOptionsToMapPack,
          compassSize: mapOptionsNoPack.compassSize,
          defaultMapScale: mapOptionsNoPack.defaultMapScale,
          mapScaleRange: mapOptionsNoPack.mapScaleRange,
          defaultControlsPose: mapOptionsNoPack.defaultControlsPose,
          modelSelectedEffect: false
        }}
        loadingTxt={mapOptionsNoPack.loadingTxt}
        gestureEnableController={{
          enableMapPinch: authMapFeat.includes('scale'),
          enableMapIncline: true,
          enableMapPan: authMapFeat.includes('move')
        }}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          fontFamily: 'PorscheNextWAr',
          borderRadius: '50px',
          background: '#000000'
        }}
        events={{
          loadComplete: this._onMapLoaded,
          mapClickNode: this._mapClickNode,
          focusGroupIDChanged: this._onFocusGroupIDChanged
        }}
        FMDirection={{
          FACILITY: 1
        }}
      >
        {authMapFeat.includes('navigation') ? (
          <FengmapNavigation
            naviOptions={{
              lineStyle: {
                lineType: fengmapSDK.FMLineType[navigation.lineType],
                lineWidth: navigation.lineWidth
              }
            }}
            start={startPoint}
            end={endPoint}
          />
        ) : null}

        {authMapFeat.includes('reload') ? (
          <FengmapResetControl
            ctrlOptions={{
              position: fengmapSDK.controlPositon.RIGHT_BOTTOM,
              imgURL: '/assets/reset.png'
            }}
          />
        ) : null}

        {authMapFeat.includes('floor') ? (
          <FengmapFloorControl
            ctrlOptions={{
              position: fengmapSDK.controlPositon.RIGHT_TOP,
              showBtnCount: 7
            }}
            labelFormater={v => `L${v}`}
          />
        ) : null}

        {authMapFeat.includes('2/3D') ? (
          <Fengmap3DControl
            ctrlOptions={{
              position: fengmapSDK.controlPositon.RIGHT_BOTTOM,
              imgURL: '/assets/',
              viewModeButtonNeeded: true,
              groupsButtonNeeded: false
            }}
          />
        ) : null}

        <FengmapCompassControl
          visible={authMapFeat.includes('compass')}
          image={{
            bg: '/assets/compass_bg.png',
            fg: '/assets/compass_fg.png'
          }}
        />

        {authMapFeat.includes('scale') ? (
          <FengmapZoomControl
            ctrlOptions={{ position: fengmapSDK.controlPositon.RIGHT_TOP, imgURL: '/assets/' }}
          />
        ) : null}

        {authMapFeat.includes('rotate') ? (
          <FengmapRotateControl
            angle={90}
            ctrlOptions={{
              position: fengmapSDK.controlPositon.LEFT_BOTTOM
            }}
          />
        ) : null}
      </FengmapBase>
    )
  }
}

Map.propTypes = {
  authMapFeat: PropTypes.array,
  navigation: PropTypes.object,
  mapOptionsNoPack: PropTypes.object,
  mapOptionsToMapPack: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  pointObj: PropTypes.object,
  onLoadComplete: PropTypes.func,
  onMapClickNode: PropTypes.func
}

export default Map
