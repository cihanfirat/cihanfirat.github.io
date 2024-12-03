const scriptURL = 'https://script.google.com/macros/s/AKfycbwyE-5yIk2BKUjV4otPERzyDNQIQvFe7DeTXIrv7of3FiLm4bkg_pUdh4oVHGZpoHjh/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
    
        form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML="Message Sent Successfully"
                setTimeout(function()
                {
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })