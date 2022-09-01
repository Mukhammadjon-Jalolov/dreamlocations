import qs from 'qs';
import axios from 'axios';

const login = async (data) => {
		const login_endpoint = 'http://localhost/api/login.php';
		
		try {
		let response = await axios.post(login_endpoint, data);
		
				if (response.data.jwt && response.data.expireAt){

					let jwt = response.data.jwt;
					let expire_at = response.data.expireAt;
					
					localStorage.setItem("access_token", jwt);
					localStorage.setItem("expire_at", expire_at);
					
				}
			}
			catch(e){
				console.log("An Error occured while Login")
			}
	}
export {login}