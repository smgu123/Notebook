import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';


export default function DrawerContent(props) {
    return(
        
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>smriti </Title>
                               
                            </View>
                            </View>
                        </View>

                    <Drawer.Section >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="document-text" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Details"
                            onPress={() => {props.navigation.navigate('Details')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="people" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="globe-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Networking"
                            onPress={() => {props.navigation.navigate('Networking')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="reader" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="ReduxPage"
                            onPress={() => {props.navigation.navigate('ReduxPage')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="videocam" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="JitsiMeet"
                            onPress={() => {props.navigation.navigate('JitsiMeet')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="download-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Docpicker"
                            onPress={() => {props.navigation.navigate('Docpicker')}}
                        />
                     
                    </Drawer.Section>
            </View>
            </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
  
})
