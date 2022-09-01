import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icons, Images } from '../../assets';
import { HeightPercent, WidthPercent } from '../../Utils/Helpers';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgress from 'react-native-circular-progress-indicator';

interface CardProps {
  data: {
    name: string,
    created: string,
    image: any,
    title: string,
    description: string
  },
  index: number
}

const Card = (props: CardProps) => {
  const { data } = props

  return (
    <View style={styles.container}>
      <View style={styles.cardHead}>
        <View style={styles.cardHeadR1}>
          <Image source={Icons.dp1} resizeMode="contain" style={styles.dp} />
          <Text style={styles.txt}>{data.name}</Text>
        </View>
        <Text style={styles.txt}>{data.created}</Text>
      </View>

      <View style={styles.cardBody}>
        <Image source={data.image} resizeMode="contain" style={styles.image} />
        <Text style={styles.bodyTitle}>{data.title}</Text>
        <Text style={styles.bodyDesc}>{data.description}</Text>

        <LinearGradient
          style={styles.gradientBox}
          useAngle
          locations={[0.017, 0.97]}
          colors={['#866EE1', '#59D1D4']}>
          <View style={styles.gradientBody}>
            <View>
              <Text style={styles.gradientTitle}>Dream Fulfillment Progress</Text>
              <View style={{ flexDirection: "row", marginTop: 4 }}>
                <Text style={styles.gradientPrice}>$12,000</Text>
                <Text style={styles.gradientPriceTotal}> / $30,000</Text>
              </View>
              <Text style={styles.gradientLastActive}>Last activity: 12/02/2021</Text>
            </View>
            <CircularProgress
              radius={35}
              value={40}
              valuePrefix={'%'}
              activeStrokeColor="#FFF"
              inActiveStrokeColor="#ACE8E9"
              inActiveStrokeOpacity={0.48}
            />
          </View>
        </LinearGradient>


        <View style={styles.cardFooter}>
          <View style={{flexDirection:"row"}}>
            <Image source={Icons.star} resizeMode="contain" style={styles.icon} />
            <Text style={styles.footerText}>20</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <Image source={Icons.chat} resizeMode="contain" style={styles.icon} />
            <Text style={styles.footerText}>2</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <Image source={Icons.share} resizeMode="contain" style={styles.icon} />
          </View>

        </View>
      </View>

    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: HeightPercent(570),
    borderRadius: 16,
    width: '100%',
    marginVertical: HeightPercent(20),
    paddingVertical: HeightPercent(20),
    paddingHorizontal: HeightPercent(20),

    shadowColor: "#0E0C12",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardHead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardHeadR1: {
    flexDirection: "row"
  },
  dp: {
    width: WidthPercent(20),
    height: WidthPercent(20),
    marginRight: 5
  },
  txt: {
    color: "#787C80",
    fontWeight: "400",
    fontSize: 12
  },
  cardBody: {

  },
  image: {
    width: "100%",
    height: HeightPercent(250),
  },
  bodyTitle: {
    fontWeight: "700",
    fontSize: 16
  },
  bodyDesc: {
    fontWeight: "400",
    fontSize: 14,
    marginTop: 8
  },
  gradientBox: {
    width: "100%",
    height: HeightPercent(100),
    backgroundColor: 'red',
    paddingHorizontal: WidthPercent(20),
    paddingVertical: WidthPercent(20),
    marginTop: 20,
    borderRadius: 16,
    justifyContent: 'space-between'
  },
  gradientTitle: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: 12,
  },
  gradientPrice: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 14,
  },
  gradientBody:{ 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  gradientPriceTotal: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: 10,
    marginTop: 4
  },
  gradientLastActive: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: 10,
    marginTop: 4
  },
  cardFooter:{
  flexDirection:"row",
  marginVertical:HeightPercent(20),
  alignItems:"center"
  },
  icon:{
    width:25,
    height:25,
  },
  footerText:{
    marginHorizontal:21,
    alignSelf:'center',
    textAlign:'center'
  }

});
