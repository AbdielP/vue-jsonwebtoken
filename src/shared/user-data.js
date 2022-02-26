export default {
    async getUserInfo (token) {
        try {
            const response = await fetch(`https://backend-node-server.herokuapp.com/api/vueforms/user/info?token=${token}`, {
            // const response = await fetch(`http://localhost:3000/api/vueforms/user/info?token=${this.getToken}`,{
                method: "GET",
              }
            );
            const data = await response.json();
            return data;
            // !data.ok ? this.errorHandler(data.err) : this.userinfo = data.user, this.contactNumbers = data.usernumbers;
          } catch (error) {
            console.log(error);
          }
    }
}