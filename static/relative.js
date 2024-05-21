document.addEventListener('DOMContentLoaded', function () {
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

    function timeSince(date) {
        const seconds = Math.floor((new Date() - date) / 1000);

        const conversions = {
            year: 31536000,
            month: 2592000,
            day: 86400,
            hour: 3600,
            minute: 60
        };

        for (let key in conversions) {
            if (seconds >= conversions[key]) {
                return rtf.format(-Math.floor(seconds / conversions[key]), key);
            }
        }

        return rtf.format(-seconds, 'second');
    }

    const timeElements = document.getElementsByTagName('time');

    for (let i = 0; i < timeElements.length; i++) {
        const datetime = timeElements[i].getAttribute('datetime');
        const date = new Date(datetime);
        timeElements[i].textContent = timeSince(date);
    }
});