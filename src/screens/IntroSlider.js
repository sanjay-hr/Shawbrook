import React, {useState} from 'react';
import {StyleSheet, View, Text, StatusBar, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const headerString = 'Lorem ipsum'
const contentString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
const blankData = ['1','2','3','4']

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    header: {
        fontSize: 44,
        fontWeight: 'bold',
        color:'#d3096b'
    },
    paragraph: {
        fontSize: 20,
        color:'#d3096b',
        width: 280,
        paddingTop:25
    },
    label:{
        fontSize: 17,
        color:'#d3096b'
    },
    labelView:{
        fontSize: 17,
        color:'white'
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 70,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
    },
    paginationDots: {
        height: 16,
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
        backgroundColor: '#d3096b'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',

    },
    skipContainer:{
        marginTop: 40,
        alignItems:'flex-end',
        paddingRight:15
    }

});


const IntroSlider =({navigation})=> {
    const [hideSkip, setHideSkip] = useState(false);
    const renderItem = ({ item,index }) => {
        return (
            <View style={styles.slide}>
                <View style={[styles.wrapper
                    // ,{marginTop:index !== 3?100:0}
                ]}>
                    {
                        // index === 3 &&
                        <Image source={require('../logo/mobile-slider.png')}/>
                    }
                    <Text style={styles.header}>{headerString}</Text>
                    <Text style={styles.paragraph}>{contentString}</Text>
                    <Text style={styles.paragraph}>{contentString}</Text>
                </View>
            </View>
        );
    }
    const keyExtractor = (item: Item) => item.title;


    let slider = undefined;


    const  renderPagination = (activeIndex: number) => {
        if(activeIndex === blankData.length - 1){
            setHideSkip(true)
        }else{
            setHideSkip(false)
        }
        return (
            <View style={styles.paginationContainer}>
                <SafeAreaView>
                    <View style={styles.paginationDots}>
                        {blankData.length > 1 &&
                            blankData.map((_, i) => (
                                <View
                                    key={i}
                                    style={[
                                        styles.dot,
                                        i === activeIndex
                                            ? { opacity: 1 }
                                            : {opacity: 0.2 },
                                    ]}
                                />
                            ))}
                    </View>
                    <View style={styles.buttonContainer}>
                        {
                            activeIndex === 0 ?
                                <TouchableOpacity  onPress={() => {navigation.goBack() }}>
                                    <Text style={styles.label}>{'< Back'}</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity  onPress={() => { slider.goToSlide(activeIndex-1)}}>
                                    <Text style={styles.label}>{'< Back'}</Text>
                                </TouchableOpacity>
                        }
                        {
                            activeIndex !== blankData.length -1 ?
                                <TouchableOpacity  onPress={() => { slider.goToSlide(activeIndex+1)}}>
                                    <Text style={styles.label}>{'Next >'}</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity  onPress={() => {navigation.navigate('login')}}>
                                    <Text style={styles.label}>{'Done'}</Text>
                                </TouchableOpacity>
                        }
                    </View>
                </SafeAreaView>

            </View>
        );
    };


    return (
        <View style={{flex: 1, backgroundColor:'white'}}>
            <StatusBar translucent backgroundColor="transparent" />
            {
                hideSkip ?
                    <View style={styles.skipContainer}>
                        <Text style={styles.labelView}>{' '}</Text>
                    </View>:
                    <TouchableOpacity
                        style={styles.skipContainer}
                        onPress={() => {navigation.navigate('login')}}>
                        <Text style={styles.label}>{'Skip >'}</Text>
                    </TouchableOpacity>
            }
            <AppIntroSlider
                keyExtractor={keyExtractor}
                dotClickEnabled={false}
                renderPagination = {renderPagination}
                renderItem={renderItem}
                data={blankData}
                ref={(ref) => (slider = ref)}
            />
        </View>
    );
}

export default IntroSlider
