import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  project: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  userCollectionId: process.env.EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID,
  vedioCollectionId: process.env.EXPO_PUBLIC_APPWRITE_VEDIO_COLLECTION_ID,
  storageBucketId: process.env.EXPO_PUBLIC_APPWRITE_STORAGE_BUCKET_ID,
};

const client = new Client()
  .setEndpoint(config.endpoint)
  .setProject(config.project);

const database = new Databases(client);

const account = new Account(client);
const avatars = new Avatars(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) {
      throw new Error("User creation failed");
    }
    // const avatarUrl = await avatars.getInitials(username);
    // console.log("Avatar URL:", avatarUrl);

    // await signIn(email, password);

    const createUser = await database.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        // avatar: avatarUrl,
      }
    );
    return createUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.error("Error signing in:", error);
    throw new Error(error);
  }
};

export { account, client, config, database };
