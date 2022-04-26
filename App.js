import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image,ScrollView, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View styles={styles.header}>
      <Image style={{height:200,width:380}} source={require('./assets/Logo.jpg')}/>
      </View>
      <ScrollView>
        
      <View>
        <Text style={styles.softwareText}>Software modelling and analysis</Text>
        
      </View>

      <View style={styles.softwareImage}>
      <Image style={{height:100,width:380}} source={require('./assets/modelling.jpg')}/>
      </View>

      <View>
        <Text style={styles.softwareInfo}>BSCSM Y2S2                            credits:3
        
        </Text>
        <Text>1)Analysis Modelling in Software Engineering.</Text>
        <Text>2)Analysis Model is a technical representation of the system</Text>
        <Text>3)It acts as a link between system description and design model.</Text>
        <Text>4)In Analysis Modelling, information, behavior and functions of the system is defined and translated into the architecture, component and interface level design in the design modeling.</Text>
        <Text>2)MR MAKHEKA                             WEDNESDAY:2HOURS</Text>
        <Text>4)10:00                                   MM 1</Text>
      </View>
            
      <View>
        <Text style={styles.mobileText}>Mobile devise Programming</Text>
        
      </View>

      <View style={styles.mobileImage}>
      <Image style={{height:100,width:380}} source={require('./assets/mobile.jpg')}/>
      </View>

      <View>
        <Text style={styles.mobileInfo}>BSCSM Y2S2                              credits:3
        </Text>
        <Text>1)Programming Mobile Devices is a comprehensive, practical introduction to programming mobile systems.</Text>
        <Text>2)The book is a platform independent approach to programming mobile devices: it does not focus on specific technologies, and devices, instead it evaluates the component areas and issues that are common to all mobile software platforms.</Text>
        <Text>2)MR NKHATHO                         TUESDAY:2HOURS</Text>
        <Text>4)10:00  AM                                 MM4</Text>
      </View>
          
      <View>
        <Text style={styles.probabilityText}>Probability and statistics</Text>
        
      </View>

      <View style={styles.probabilityImage}>
      <Image style={{height:100,width:380}} source={require('./assets/probability.jpg')}/>
      </View>

      <View>
        <Text style={styles.probabilityInfo}>BSCSM Y2S2   credits:3  </Text>
        <Text>1)Probability and statistics, the branches of mathematics concerned with the laws governing random events, including the collection, analysis, interpretation, and display of numerical data. Probability has its origin in the study of gambling and insurance in the 17th century, and it is now an indispensable tool of both social and natural sciences.</Text>
        <Text>2)www.britannica.com/science/probability</Text>
        <Text>3)MRS MATHE                                    THURSDAY:2HOURS</Text>
        <Text>4)14:00                                   ROOM 1</Text>
      </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
  softwareText:{
    fontSize:15,
  },
  softwareInfo:{
    fontSize:15,
    height:5,
  },
    mobileText:{
      fontSize:15,
    },
    mobileInfo:{
      fontSize:40,
      height:5,
      },
       probabilityText:{
        fontSize:15,
      },
      probabilityInfo:{
        fontSize:15,
        fontWeight:'bold'
      },
    }
);
