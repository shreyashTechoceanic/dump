import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import OuterMessageTopBar from './src/components/Messages/OuterMessageTopBar';
import Message_SearchBox from './src/components/Messages/Message_SearchBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <OuterMessageTopBar />

      <View style={styles.mainContainer}>
        <Message_SearchBox />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: 'center',
  },
});

// import FlatCards from './src/components/FlatCards';
// import OwnStory from './src/components/Story/OwnStory';
// import StoryViews from './src/components/Story/StoryViews';
// import Story from './src/components/Story/Story';
// import TopNavBar from './src/components/DashBoard/TopNavBar';
// import TimeLinePost from './src/components/DashBoard/TimeLinePost';
// import SearchBox from './src/components/DashBoard/SearchBox';
// import SearchHistory from './src/components/Search/SearchHistory';
// import SelectFriends from './src/components/Search/SelectFriends';

// import OwnStory from './src/components/Story/OwnStory';
// import Reels from './src/components/Clips/Reels';

//  {/* <FlatCards
//         imagesSrc={[
//           'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//           'https://s3-alpha-sig.figma.com/img/dfb4/7892/1e502ceb87e97b5ccc30a03b7f19e311?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRmqPalBY~EVaYtzl9kqFyI~X0~SgnZqJBAAn8UWyF3NKuPHGX06bi4IHTvDJnYhzPnRITlOqbwbTmFSBhtHD4o8Nu92YmgqFismMGRyQ6GlxMHa2~nuPnyRSOo0lIaMEt~bdWGmBx0a9otev1fNIa736EFwN2pzfU9E59zLnPXJ78Jyu0YVZo8Ef8~b1e1Igck747tIeSVVngZDelvZiY0osvxmeuy3JBYOrrVpPOgtNnSeb0n0PHJa55Eoa0t7snTAaW4PKhtmqcU3zmg2Isy9lwpjdAwOj-qz9vztc-UqmeboXzBqTUb6bPHZsxi1rRe1VnOG0sc5buiJEQmDWA__',
//           'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//           'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//           'https://s3-alpha-sig.figma.com/img/dfb4/7892/1e502ceb87e97b5ccc30a03b7f19e311?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRmqPalBY~EVaYtzl9kqFyI~X0~SgnZqJBAAn8UWyF3NKuPHGX06bi4IHTvDJnYhzPnRITlOqbwbTmFSBhtHD4o8Nu92YmgqFismMGRyQ6GlxMHa2~nuPnyRSOo0lIaMEt~bdWGmBx0a9otev1fNIa736EFwN2pzfU9E59zLnPXJ78Jyu0YVZo8Ef8~b1e1Igck747tIeSVVngZDelvZiY0osvxmeuy3JBYOrrVpPOgtNnSeb0n0PHJa55Eoa0t7snTAaW4PKhtmqcU3zmg2Isy9lwpjdAwOj-qz9vztc-UqmeboXzBqTUb6bPHZsxi1rRe1VnOG0sc5buiJEQmDWA__',
//           'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//           'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//           'https://s3-alpha-sig.figma.com/img/dfb4/7892/1e502ceb87e97b5ccc30a03b7f19e311?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRmqPalBY~EVaYtzl9kqFyI~X0~SgnZqJBAAn8UWyF3NKuPHGX06bi4IHTvDJnYhzPnRITlOqbwbTmFSBhtHD4o8Nu92YmgqFismMGRyQ6GlxMHa2~nuPnyRSOo0lIaMEt~bdWGmBx0a9otev1fNIa736EFwN2pzfU9E59zLnPXJ78Jyu0YVZo8Ef8~b1e1Igck747tIeSVVngZDelvZiY0osvxmeuy3JBYOrrVpPOgtNnSeb0n0PHJa55Eoa0t7snTAaW4PKhtmqcU3zmg2Isy9lwpjdAwOj-qz9vztc-UqmeboXzBqTUb6bPHZsxi1rRe1VnOG0sc5buiJEQmDWA__',
//           'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//           'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//           'https://s3-alpha-sig.figma.com/img/dfb4/7892/1e502ceb87e97b5ccc30a03b7f19e311?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRmqPalBY~EVaYtzl9kqFyI~X0~SgnZqJBAAn8UWyF3NKuPHGX06bi4IHTvDJnYhzPnRITlOqbwbTmFSBhtHD4o8Nu92YmgqFismMGRyQ6GlxMHa2~nuPnyRSOo0lIaMEt~bdWGmBx0a9otev1fNIa736EFwN2pzfU9E59zLnPXJ78Jyu0YVZo8Ef8~b1e1Igck747tIeSVVngZDelvZiY0osvxmeuy3JBYOrrVpPOgtNnSeb0n0PHJa55Eoa0t7snTAaW4PKhtmqcU3zmg2Isy9lwpjdAwOj-qz9vztc-UqmeboXzBqTUb6bPHZsxi1rRe1VnOG0sc5buiJEQmDWA__',
//           'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//         ]}
//       /> }
//  *  {/* <StoryViews
//           imgSrc={[
//             'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//             'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//             'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//           ]}
//         /> */}

// {/* <Story
//   imgSrc={[
//     'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//     'https://s3-alpha-sig.figma.com/img/84b9/d56a/724f72eb2c73d3e7560e01a5f0093700?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HaPdmvY9qiLYoD0nAG5WhxIs8AfAB8bxAOO5dgqpOSq79-Q0DeH3FQttCICWNbMIrb~nA99VGeCQt-B5~ORfmI~5~Vm53SxM2-ZACpfWfaYg5K5hFGrx6akC5Wp3o6vHpcF3HQj9lSbtAoIBXmrLHDUdVDgyDPomdw6btpNVXRvYXEvoqYG8k92bUHwa98h838dQZYQ8xMQHJge-Yxt5FxRa29Ww3Fh-yx3gDT8tfweqViR5rF473YbNQkx5sC3dy735s7SLlm~NSAEFfstmO335809Q3MuqFMPj6Td0cAdSoS4eVxZ9IFhPKK7FHUFFnDXPk6QtwbpEDwGolaOvsw__',
//   ]}
//   savebtnfunction={function (): void {
//     console.log('Function not implemented.');
//   }}
//   proFilePic={
//     'https://s3-alpha-sig.figma.com/img/84b9/d56a/724f72eb2c73d3e7560e01a5f0093700?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HaPdmvY9qiLYoD0nAG5WhxIs8AfAB8bxAOO5dgqpOSq79-Q0DeH3FQttCICWNbMIrb~nA99VGeCQt-B5~ORfmI~5~Vm53SxM2-ZACpfWfaYg5K5hFGrx6akC5Wp3o6vHpcF3HQj9lSbtAoIBXmrLHDUdVDgyDPomdw6btpNVXRvYXEvoqYG8k92bUHwa98h838dQZYQ8xMQHJge-Yxt5FxRa29Ww3Fh-yx3gDT8tfweqViR5rF473YbNQkx5sC3dy735s7SLlm~NSAEFfstmO335809Q3MuqFMPj6Td0cAdSoS4eVxZ9IFhPKK7FHUFFnDXPk6QtwbpEDwGolaOvsw_'
//   }
//   profilePicfunction={function (): void {
//     console.log('Function not implemented.');
//   }}
// /> */}

// {/* <OwnStory
//   imgSrc={[
//     'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//     'https://s3-alpha-sig.figma.com/img/dfb4/7892/1e502ceb87e97b5ccc30a03b7f19e311?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRmqPalBY~EVaYtzl9kqFyI~X0~SgnZqJBAAn8UWyF3NKuPHGX06bi4IHTvDJnYhzPnRITlOqbwbTmFSBhtHD4o8Nu92YmgqFismMGRyQ6GlxMHa2~nuPnyRSOo0lIaMEt~bdWGmBx0a9otev1fNIa736EFwN2pzfU9E59zLnPXJ78Jyu0YVZo8Ef8~b1e1Igck747tIeSVVngZDelvZiY0osvxmeuy3JBYOrrVpPOgtNnSeb0n0PHJa55Eoa0t7snTAaW4PKhtmqcU3zmg2Isy9lwpjdAwOj-qz9vztc-UqmeboXzBqTUb6bPHZsxi1rRe1VnOG0sc5buiJEQmDWA__',
//     'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//   ]}
//   savebtnfunction={function (): void {
//     console.log('Function not implemented.');
//   }}
//   proFilePic={
//     'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_'
//   }
//   profilePicfunction={function (): void {
//     console.log('Function not implemented.');
//   }}
// /> */}
// {/* <Reels
//   videoSrc={'https://www.w3schools.com/html/movie.mp4'}
//   caption={'Vivala Vida By Cold Play, 2005 in Bracelona, Spain'}
// /> */}

// {/* <TopNavBar
//   onSearch={function (): void {
//     console.log('Function not implemented.');
//   }}
//   onMsg={function (): void {
//     console.log('Function not implemented.');
//   }}
//   onBell={function (): void {
//     console.log('Function not implemented.');
//   }}
//   onBurger={function (): void {
//     console.log('Function not implemented.');
//   }}
// /> */}
// {/* <SearchBox
//   searchFunction={function (searchText: string): void {
//     console.log(searchText);
//   }}
// /> */}
// {/* <SearchHistory
//   searchtext={[
//     'Puneet',
//     'sauvar',
//     'smita',
//     'Puneet',
//     'sauvar',
//     'smita',
//     'Puneet',
//     'sauvar',
//     'smita',
//   ]}
// /> */}
// {/* <TimeLinePost /> */}
// {/* <SelectFriends
//   accounts={[
//     {
//       id: '1',
//       imgSrc:
//         'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
//       userid: '1',
//       name: 'puneet',
//     },
//   ]}
// /> */}
