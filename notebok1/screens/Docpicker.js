import React from 'react';
import {

    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';


// import RNFS from 'react-native-fs';
// import FileViewer from 'react-native-file-viewer';
// import { Button } from 'react-native-paper';

// const url = 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf';
// const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.pdf`;

// const options = {
//   fromUrl: url,
//   toFile: localFile
// };

// const Docpick = async() => {
// RNFS.downloadFile(options).promise
// .then(() => {console.log(localFile)
// FileViewer.open(localFile ,{ showAppsSuggestions: true})})
// .then(() => {
//   console.log("success");
//   alert("dsdsd")
// })
// .catch(error => {
//   console.log("error")
// });
// }

// const Docpicker = () =>{
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

//     <TouchableOpacity onPress={Docpick} style ={{ alignSelf:'center',width:"50%",
//     height:60, backgroundColor:'gray',
//     alignItems:'center',justifyContent:'center'}} >
//       <Text style={{color:'white',fontSize:15}}>
//         click me
//       </Text>
//     </TouchableOpacity>

//     </View>
//   );
// }

// export default Docpicker;

import PDFView from 'react-native-view-pdf';


const resources = {
  file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
  url: 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
  base64: 'JVBERi0xLjMKJcfs...',
};

export default class App extends React.Component {
  render() {
    const resourceType = 'url';

    return (
      <View style={{ flex: 1 }}>
        {/* Some Controls to change PDF resource */}
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={resources[resourceType]}
          resourceType={resourceType}
          onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
          onError={(error) => console.log('Cannot render PDF', error)}
        />
      </View>
    );
  }
}
