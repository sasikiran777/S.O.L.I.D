
// Here single class is responsible all user related operation which is not following
// single responsibility principal

// As per single responsibility principal a class can only responsible for certain operations only
// ex. all auth related operation should be in one class and update operations should be in another class

class UserManagement {
    userAuth() {
        console.log("User Auth Called");
    }

    updateUserProfile() {
        console.log("Update User Profile Called");
    }
}

const user = new UserManagement();
user.userAuth();
user.updateUserProfile();