import { Component, createElement } from "react";


import HTML from 'react-native-render-html';
import { ScrollView, Dimensions, Linking } from 'react-native';

function openLink(event, url) {
    Linking.openURL(url);
}

export class RenderHTML extends Component {

    render() {

        if (this.props.content.status !== 'available') {
            return null;
        }

        return (
            
            <ScrollView style={{flex: 1, marginLeft: this.props.marginLeft, marginRight: this.props.marginRight}}>
                <HTML 
                    html={this.props.content.value}
                    onLinkPress={openLink}
                    imagesMaxWidth={ Dimensions.get('window').width } 
                    staticContentMaxWidth={ Dimensions.get('window').width }
                    textSelectable= { true }
                    allowFontScaling = { true }
                    baseFontStyle={{ color: this.props.fontColor }}                     
                    tagsStyles={{
                        h1: {
                          fontSize: this.props.fontSize + 5,
                          color: this.props.fontColorHeaders,
                        },
                        h2: {
                            fontSize: this.props.fontSize + 4,
                            color: this.props.fontColorHeaders,                            
                        },
                        h3: {
                            fontSize: this.props.fontSize + 3,
                            color: this.props.fontColorHeaders,                            
                        },
                        h4: {
                            fontSize: this.props.fontSize + 2,
                            color: this.props.fontColorHeaders,                            
                        },
                        h5: {
                            fontSize: this.props.fontSize + 1,
                            color: this.props.fontColorHeaders,                            
                        },
                        p: {
                          fontSize: this.props.fontSize,
                        },
                        a: {
                            fontSize: this.props.fontSize,
                          },
  
                      }}
                />
            </ScrollView>
        );
    }
}