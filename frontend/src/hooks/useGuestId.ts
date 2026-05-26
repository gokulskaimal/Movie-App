const GUEST_ID_KEY = 'x-guest-id'

export const getGuestId = () => {
    let guestId = localStorage.getItem(GUEST_ID_KEY)

    if(!guestId){
        guestId = crypto.randomUUID()

        localStorage.setItem(GUEST_ID_KEY , guestId)

    }

    return guestId;
}
