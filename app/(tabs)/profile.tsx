import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <Text className="text-lg text-white px-5">Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
