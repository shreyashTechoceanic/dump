import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

// import ReelSideBtns from './src/components/ReelSideBtns';
import Reels from './src/components/Reels';
// import Story from './src/components/Story';
// import OwnStory from './src/components/OwnStory';
// import StoryViews from './src/components/StoryViews';
// import ClipsPreview from './src/components/ClipsPreview';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        {/* <OwnStory
          savebtnfunction={function (): void {
            console.log('Function not implemented.');
          }}
          imgSrc={[
            'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
            'https://s3-alpha-sig.figma.com/img/dfb4/7892/1e502ceb87e97b5ccc30a03b7f19e311?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRmqPalBY~EVaYtzl9kqFyI~X0~SgnZqJBAAn8UWyF3NKuPHGX06bi4IHTvDJnYhzPnRITlOqbwbTmFSBhtHD4o8Nu92YmgqFismMGRyQ6GlxMHa2~nuPnyRSOo0lIaMEt~bdWGmBx0a9otev1fNIa736EFwN2pzfU9E59zLnPXJ78Jyu0YVZo8Ef8~b1e1Igck747tIeSVVngZDelvZiY0osvxmeuy3JBYOrrVpPOgtNnSeb0n0PHJa55Eoa0t7snTAaW4PKhtmqcU3zmg2Isy9lwpjdAwOj-qz9vztc-UqmeboXzBqTUb6bPHZsxi1rRe1VnOG0sc5buiJEQmDWA__',
            'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
          ]}
          profilePicfunction={function (): void {
            console.log('Function not implemented.');
          }}
          proFilePic="https://s3-alpha-sig.figma.com/img/84b9/d56a/724f72eb2c73d3e7560e01a5f0093700?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HaPdmvY9qiLYoD0nAG5WhxIs8AfAB8bxAOO5dgqpOSq79-Q0DeH3FQttCICWNbMIrb~nA99VGeCQt-B5~ORfmI~5~Vm53SxM2-ZACpfWfaYg5K5hFGrx6akC5Wp3o6vHpcF3HQj9lSbtAoIBXmrLHDUdVDgyDPomdw6btpNVXRvYXEvoqYG8k92bUHwa98h838dQZYQ8xMQHJge-Yxt5FxRa29Ww3Fh-yx3gDT8tfweqViR5rF473YbNQkx5sC3dy735s7SLlm~NSAEFfstmO335809Q3MuqFMPj6Td0cAdSoS4eVxZ9IFhPKK7FHUFFnDXPk6QtwbpEDwGolaOvsw__"
        /> */}
        {/* <StoryViews
          imgSrc={[
            'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
            'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
            'https://s3-alpha-sig.figma.com/img/edfb/e2c4/7323c52b0c6e356b4685e019b88c51ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnlrPbufelsQwubneQXyLteSthgrKh0450GTT7AOZYA8Or7OXCxUhTV0yTBA2cOT~TppNisFkiICjuLQBEfzUJdlieIk76MulnZFho8wAzGxpQ~ezqPHlzwjyty8-Xqu-htYMC80Y8z0Jt5qNGjLD3M6eQplhv-M1yZrQgnSsic9TJ2n4NvHO9dyjEYmaVg~EiZAIYvwtv0zRPkBU0Ut14NoUt~Jp0xoKZZJVa9Z4NYl6a4YADeuu734r1~E9FKni1umxEPCxkXM4cz9NQGe~5PEMkuvgToWuNU7lj2E959XOKWCLgtjWffy8vW4VJLpn0Tga9zSwqfzSNV31kREA_',
          ]}
        /> */}
        <Reels
          videoSrc={
            'https://rr3---sn-qxaelnes.googlevideo.com/videoplayback?expire=1723467460&ei=ZLK5ZrXnB8Dd-LAPz9CrwAc&ip=91.123.10.55&id=o-AL6bFUuz-6m1J2GJipOmcckOeGs9uCHSKgRecPI2n4HU&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&cnr=14&ratebypass=yes&dur=13.769&lmt=1699164418473153&c=ANDROID_TESTSUITE&txp=6300224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgMH387z8rnT-qgdoD0JVXskRFQl3T72Ih9ZNdAWT8FdwCIQDcYaIpYjdykTUnrbvxgp1m_A5yv3FOsdB7hwalaUcJuQ%3D%3D&rm=sn-pmcg-bg0z7d,sn-bg0eez7e&rrc=79,104&req_id=4fafb991240da3ee&cmsv=e&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=Sw&mip=103.165.30.236&mm=30&mn=sn-qxaelnes&ms=nxu&mt=1723445069&mv=u&mvi=5&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AGtxev0wRgIhALt5kZ0xqZdUDHF272wWh2rzWBpAjDDYFdZcagZ3CKMJAiEAuUHDtps9tuMsU86t60k1jeTv4mS2HKWNouaqABay1g8%3D&ir=1&rr=12'
          }
          caption={'Vivala Vida By Cold Play, 2005 in Bracelona, Spain'}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    height: '100%',

    backgroundColor: '#000',
  },
});
