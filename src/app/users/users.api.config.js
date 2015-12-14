export default function UsersRestangular(RestangularWithAuth) {
    function processingData(item) {
        if(!('fullAddress' in item)) {
            item.fullAddress = item.address.city + ', ' + item.address.street + ', ' + item.address.suite;
            item.website = (!~item.website.indexOf('http')) ? 'http://' + item.website : item.website;
            item.avatarUrl = 'https://randomuser.me/api/portraits/thumb/women/' + item.id + '.jpg';
        }

    }
    return RestangularWithAuth.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.addResponseInterceptor(function(data, operation, what) {
            if(operation != 'post' && operation != 'remove') {
                if (data.length) {
                    data.forEach((item) => {
                        processingData(item);
                    });
                } else {
                    processingData(data);
                }
            }

            return data;
        });
    });
}
