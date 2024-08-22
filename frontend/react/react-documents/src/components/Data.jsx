const user = {
  name: "Aiden Ahn",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Data() {
  return (
    <>
      <p>{user.name}</p>
      <img
        src={user.imageUrl}
        alt={"photo of " + user.name}
        style={{ width: user.imageSize, height: user.imageSize, borderRadius: "50%" }}
      />
    </>
  );
}
export default Data
