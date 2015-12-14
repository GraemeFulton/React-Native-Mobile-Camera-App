const React = require('react-native');

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    CameraRoll,
    TouchableHighlight,
    NativeModules,
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    imageGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    }
});

const reactImageProject = React.createClass({
    getInitialState() {
        return {
            images: [],
            selected: '',
        };
    },
    componentWillReceiveProps: function(nextProps) {
      if(this.props.reload!=='false'){

          this.componentDidMount()
      }
    },
    componentDidMount() {
        const fetchParams = {
            first: 24,
        };
        CameraRoll.getPhotos(fetchParams, this.storeImages, this.logImageError);
    },

    storeImages(data) {
        const assets = data.edges;
        const images = assets.map((asset) => asset.node.image);
        this.setState({
            images: images,
        });
    },

    logImageError(err) {
        console.log(err);
    },

    selectImage(uri) {
        NativeModules.ReadImageData.readImage(uri, (image) => {
            this.setState({
                selected: image,
            });
            console.log(image);
        });
    },

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.imageGrid}>
                { this.state.images.map((image) => {
                    return (
                        <TouchableHighlight key={image.uri} onPress={this.selectImage.bind(null, image.uri)}>
                        <Image style={styles.image} source={{ uri: image.uri}}  />
                        </TouchableHighlight>
                    );
                    })
                }
                </View>
            </ScrollView>
        );
    }
});

module.exports = reactImageProject;
