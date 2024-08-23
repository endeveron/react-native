import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <Text className="text-lg text-white px-5">Home</Text>
    </SafeAreaView>
  );
};

export default Home;
