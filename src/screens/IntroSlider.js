import React, {useState} from 'react';
import {StyleSheet, View, Text, StatusBar, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import TextButton from "../components/TextButton";

const headerString = 'Lorem ipsum'
const contentString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
const blankData = ['1','2','3','4']

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
    },
    container:{
        flex: 1,
        backgroundColor:'white'
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
        marginTop: 20,
        alignItems:'flex-end',
        paddingRight:10,
        height:40
    }

});


const IntroSlider =({navigation})=> {
    const [showSkip, setShowSkip] = useState(true);
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
    const keyExtractor = (item) => item.title;


    let slider = undefined;


    const  renderPagination = (activeIndex: number) => {
        if(activeIndex === blankData.length - 1){
            setShowSkip(false)
        }else{
            setShowSkip(true)
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
                        <TextButton label={'< Back'}
                                      onPress={() => activeIndex === 0 ?
                                          navigation.goBack() :
                                          slider.goToSlide(activeIndex-1)
                                      }/>
                        <TextButton label={ activeIndex !== blankData.length -1 ? 'Next >' : 'Done'}
                                      onPress={() => activeIndex !== blankData.length -1 ?
                                          slider.goToSlide(activeIndex+1) :
                                          navigation.navigate('login')
                                      }/>
                    </View>
                </SafeAreaView>
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.skipContainer}>
                {
                    showSkip &&
                    <TextButton
                        label={'Skip >'}
                        onPress={()=>navigation.navigate('login')}
                        style={styles.skipContainer}/>
                }
            </View>
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




