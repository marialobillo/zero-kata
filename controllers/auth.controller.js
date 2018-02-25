function AuthController(){

	function isAUthorized(roles, neededRole){
		return roles.indexOf(neededRole) >= 0;
	}
	return {isAUthorized};
}

module.exports = AuthController();
