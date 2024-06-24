// As per single responsibility principal all class below are responsible for certain operations only

class UserRegistration {
    userReg() {
        console.log("User Reg Called");
    }
}

class AuthManagement {
    userAuth() {
        console.log("User Auth Called");
    }

    userForgotPassword() {
        console.log("User Forgot Password Called");
    }
}

class UserManagement {
    updateUserProfile() {
        console.log("Update User Profile Called");
    }
}

const user = new UserManagement();
const auth = new AuthManagement();
const reg = new UserRegistration();

reg.userReg()

auth.userAuth();
auth.userForgotPassword();

user.updateUserProfile();
