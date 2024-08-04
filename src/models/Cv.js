const tag = '[CvModel]'

export default {
    getInitCV () {
        console.log(tag, 'getCV()');
        if (window.fetch) {
            return fetch('https://phantombuster.s3.amazonaws.com/L0GHa2EvBCs/32J1x6oMgxrlokkDDjk0zg/result.json', {
                method: 'get',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                //.then(res => res.text())
                .catch(err => { throw new Error(err) })
        }
    }
}
