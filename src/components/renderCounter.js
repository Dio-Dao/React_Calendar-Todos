import React from 'react'

const size = 10

export default class RenderCount extends React.Component {
    renders = 0
    render() {
        const divStyle = {
            position: 'absolute',
            top: '0',
            right: '0',
            fontStyle: 'normal',
            textAlign: 'center',
            height: `${size}px`,
            width: `${size}px`,
            lineHeight: `${size}px`,
            borderRadius: `${size / 2}px`,
            border: '1px solid #ddd',
            background: '#eee',
        }
        return <div style={divStyle}
        >{++this.renders}</div>
    }
}
