import mongoose from "mongoose";
const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-k9d35cm-shard-00-00.hye2isu.mongodb.net:27017,ac-k9d35cm-shard-00-01.hye2isu.mongodb.net:27017,ac-k9d35cm-shard-00-02.hye2isu.mongodb.net:27017/?ssl=true&replicaSet=atlas-118sjm-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Error while connecting the DB", error);
  }
};
export default Connection;
