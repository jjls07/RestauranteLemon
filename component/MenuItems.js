import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';

const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
  ];

  const MenuItems = () => {

    return(
        <View style={styles.vista}>
        <ScrollView
          indicatorStyle={"white"}
          style={styles.vistascroll1}>
          <Text style={styles.texto1}>
            View Menu
          </Text>
          <Text style={styles.texto2}>
            {menuItemsToDisplay[0]}
          </Text>
        </ScrollView>
      </View>
    );

  };

  export default MenuItems;

  const styles = StyleSheet.create({
    vista: {
      flex: 0.75,
    },
    vistascroll1: {
      paddingHorizontal: 40,
      paddingVertical: 40,
      backgroundColor: "black",
    },
    texto1: {
      color: 'EDEFEE', 
      fontSize: 10, 
      flexWrap: 'wrap',
    },
    texto2: {
      color: '#F4CE14', 
      fontSize: 15,
    },
  });
  