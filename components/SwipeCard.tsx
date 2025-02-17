import React, { useState, useRef } from 'react';
import { StyleSheet, Animated, PanResponder, Dimensions, View } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

// Données de test
const DUMMY_PROFILES = [
  {
    id: 1,
    name: 'Elon Musk',
    age: 55,
    location: 'San Francisco, US',
    image: require('../assets/images/elon-chad.jpg'),
    avatar: require('../assets/images/elon.jpg'),
  },
  {
    id: 2,
    name: 'Donald Trump',
    age: 79,
    location: 'Washington, US',
    image: require('../assets/images/donald-trump.jpg'),
    avatar: require('../assets/images/donald-trump-chad.jpg'),
  },
  {
    id: 3,
    name: 'Shrek Smith',
    age: 42,
    location: 'Far Far Away',
    image: require('../assets/images/shrek-smith.jpg'),
    avatar: require('../assets/images/shrek-smith.jpg'),
  }
];

export function SwipeCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;
  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
    outputRange: ['-30deg', '0deg', '30deg'],
  });
  const likeOpacity = position.x.interpolate({
    inputRange: [0, SCREEN_WIDTH * 0.25],
    outputRange: [0, 1],
  });
  const nopeOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH * 0.25, 0],
    outputRange: [1, 0],
  });

  const nextCard = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
    position.setValue({ x: 0, y: 0 });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        position.setValue({ x: gesture.dx, y: 0 });
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          swipeRight();
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          swipeLeft();
        } else {
          resetPosition();
        }
      }
    })
  ).current;

  const swipeRight = () => {
    Animated.timing(position, {
      toValue: { x: SCREEN_WIDTH * 2, y: 0 },
      duration: 250,
      useNativeDriver: false
    }).start(() => nextCard());
  };

  const swipeLeft = () => {
    Animated.timing(position, {
      toValue: { x: -SCREEN_WIDTH * 2, y: 0 },
      duration: 250,
      useNativeDriver: false
    }).start(() => nextCard());
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false
    }).start();
  };

  if (currentIndex >= DUMMY_PROFILES.length) {
    return (
      <ThemedView style={[styles.container, styles.noMoreCards]}>
        <ThemedText type="subtitle">Plus de profils disponibles !</ThemedText>
      </ThemedView>
    );
  }

  const profile = DUMMY_PROFILES[currentIndex];

  return (
    <ThemedView style={styles.container}>
      {/* Next card (for the pile effect) */}
      {currentIndex + 1 < DUMMY_PROFILES.length && (
        <View style={[styles.card, styles.nextCard]}>
          <Image
            source={DUMMY_PROFILES[currentIndex + 1].image}
            style={styles.image}
          />
          <ThemedView style={styles.info}>
            <Image
              source={DUMMY_PROFILES[currentIndex + 1].avatar}
              style={styles.infoImage}
            />
            <ThemedText type="subtitle">{DUMMY_PROFILES[currentIndex + 1].name}, {DUMMY_PROFILES[currentIndex + 1].age}</ThemedText>
            <ThemedText>{DUMMY_PROFILES[currentIndex + 1].location}</ThemedText>
          </ThemedView>
        </View>
      )}

      <Animated.View
        style={[
          styles.card,
          {
            transform: [
              { translateX: position.x },
              { rotate: rotate }
            ]
          }
        ]}
        {...panResponder.panHandlers}
      >
        {/* Overlay LIKE */}
        <Animated.View style={[styles.overlay, styles.likeOverlay, { opacity: likeOpacity }]}>
          <FontAwesome name="heart" size={100} color="#4CD964" />
          <ThemedText style={styles.overlayText}>LIKE</ThemedText>
        </Animated.View>

        {/* Overlay NOPE */}
        <Animated.View style={[styles.overlay, styles.nopeOverlay, { opacity: nopeOpacity }]}>
          <FontAwesome name="times" size={100} color="#FF3B30" />
          <ThemedText style={styles.overlayText}>NOPE</ThemedText>
        </Animated.View>

        <Image
          source={profile.image}
          style={styles.image}
        />
        <ThemedView style={styles.info}>
          <Image
            source={profile.avatar}
            style={styles.infoImage}
          />
          <ThemedText type="subtitle">{profile.name}, {profile.age}</ThemedText>
          <ThemedText>{profile.location}</ThemedText>
        </ThemedView>
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 600,
    width: SCREEN_WIDTH - 32,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'absolute',
  },
  nextCard: {
    top: 5,
    zIndex: -1,
  },
  image: {
    height: 400,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  info: {
    padding: 16,
    gap: 8,
  },
  infoImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  overlay: {
    position: 'absolute',
    top: 50,
    zIndex: 1,
    alignItems: 'center',
    transform: [{ rotate: '-30deg' }],
  },
  likeOverlay: {
    right: 40,
  },
  nopeOverlay: {
    left: 40,
  },
  overlayText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  noMoreCards: {
    padding: 20,
  },
}); 