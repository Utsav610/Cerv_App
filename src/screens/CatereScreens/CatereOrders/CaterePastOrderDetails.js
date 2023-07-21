/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../../Constants/Color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StepIndicator from 'react-native-step-indicator';

const stepIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 20,
  // separatorStrokeWidth: 2,
  // currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: Color.primaryColor,
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: Color.primaryColor,
  stepStrokeUnFinishedColor: Color.primaryColor,
  separatorFinishedColor: Color.primaryColor,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: Color.primaryColor,
  stepIndicatorUnFinishedColor: Color.primaryColor,
  stepIndicatorCurrentColor: Color.primaryColor,
  // stepIndicatorLabelFontSize: 0,
  // currentStepIndicatorLabelFontSize: 5,
  stepIndicatorLabelCurrentColor: Color.primaryColor,
  stepIndicatorLabelFinishedColor: Color.primaryColor,
  stepIndicatorLabelUnFinishedColor: Color.primaryColor,
  labelColor: Color.primaryColor,
  labelSize: 12,
  currentStepLabelColor: Color.primaryColor,

  // stepIndicatorSize: 20,
  // currentStepIndicatorSize: 30,
  // separatorStrokeWidth: 2,
  // currentStepStrokeWidth: 3,
  // stepStrokeCurrentColor: Color.primaryColor,
  // stepStrokeWidth: 1,
  // stepStrokeFinishedColor: Color.primaryColor,
  // stepStrokeUnFinishedColor: Color.primaryColor,
  // separatorFinishedColor: Color.primaryColor,
  // separatorUnFinishedColor: '#aaaaaa',
  // stepIndicatorFinishedColor: Color.primaryColor,
  // stepIndicatorUnFinishedColor: Color.primaryColor,
  // stepIndicatorCurrentColor: Color.primaryColor,
  // stepIndicatorLabelFontSize: 13,
  // // currentStepIndicatorLabelFontSize: 13,
  // stepIndicatorLabelCurrentColor: Color.primaryColor,
  // stepIndicatorLabelFinishedColor: '#ffffff',
  // stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  // labelColor: '#999999',
  // labelSize: 13,
  // currentStepLabelColor: '#fe7013',
};

export default function CaterePastOrderDetails({navigation}) {
  const [currentStep, setCurrentStep] = useState(1);
  const stepLabels = [
    'Order Accepted',
    'Preparing Order',
    'Dispatch for Delivery',
    'Order Delivered',
  ];
  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={{marginVertical: 10}}>
            <StepIndicator
              customStyles={stepIndicatorStyles}
              currentPosition={currentStep}
              labels={stepLabels}
              stepCount={4}
            />
          </View>

          <View style={styles.header}>
            <Image
              source={require('../../../assest/catere.jpeg')}
              style={styles.image}
            />
            <View>
              <Text style={styles.caterTitle}>
                St John & St Thomas Catering
              </Text>
              <Text>Address</Text>
              <Text>22/11/2020</Text>
            </View>
          </View>
          <View>
            <Text style={{color: 'green'}}>
              Completed on 21/10/2020 at 01:20 PM
            </Text>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.orderTypeDetails}>
              <Text style={styles.label}>Order type</Text>
              <Text style={styles.itemText}>Delivery</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>Order Items Details</Text>
            <View style={styles.itemContent}>
              <View>
                <Text style={styles.itemText}>Item1</Text>
                <Text>20 Dishes</Text>
              </View>
              <Text style={styles.itemText}>$271.80</Text>
            </View>
            <View style={styles.itemContent}>
              <View>
                <Text style={styles.itemText}>Item1</Text>
                <Text>20 Dishes</Text>
              </View>
              <Text style={styles.itemText}>$271.80</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.label}>
              <Text>Rate and Review</Text>
            </View>
            <View style={styles.direction}>
              <Text style={styles.itemText}>Nathan McCullam </Text>
              <Text>20/11/2020</Text>
            </View>
            <View style={styles.rateContainer}>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map(index => (
                  <FontAwesome5 key={index} name="star" size={16} />
                ))}
              </View>
            </View>
            <View>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.orderButtons}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate('Invoice');
            }}>
            <Text style={{color: Color.primaryColor}}>View invoice</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.rejectButton]}
            onPress={() => {
              navigation.navigate('Order');
            }}>
            <Text style={styles.buttonText}>Send Invoice</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.accentColor,
  },
  ItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 60,
    marginHorizontal: 5,
  },
  caterTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  itemContainer: {
    // paddingVertical: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: Color.accentColor,
  },
  orderTypeDetails: {
    marginVertical: 5,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    // paddingVertical: 10,
    paddingBottom: 10,
  },
  orderButtons: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '45%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.primaryColor,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  rejectButton: {
    backgroundColor: Color.primaryColor,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 10, // Adjust the value based on your button height
  },
});
