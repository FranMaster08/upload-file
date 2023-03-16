class userEntity {
  constructor(name, lastname, address, email, password, id = null) {
    this.id = id ? id : null;
    this.name = name;
    this.lastname = lastname;
    this.address = address;
    this.email = email;
    this.password = password;
  }
}

export default userEntity;
