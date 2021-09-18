const resolveRoutes = (route) => {
    if (route != '/') {
        let validRoute = route;
        if(validRoute == 2){
            validRoute = '/:favoritos';
            return validRoute;
        }
        if(validRoute == 1){
            validRoute = '/:chat';
            return validRoute;
        }
        if(validRoute == 3){
            validRoute = '/:register';
            return validRoute;
        }
    }
    return `${route}`;
}

export default resolveRoutes;