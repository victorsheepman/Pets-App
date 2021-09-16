const resolveRoutes = (route) => {
    if (route != '/') {
        let validRoute = route;
        if(validRoute == 2){
            validRoute = '/:favoritos';
            return validRoute;
        }
    }
    return `${route}`;
}

export default resolveRoutes;