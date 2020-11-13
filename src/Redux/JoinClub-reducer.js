const JOIN_CLUB = "JOIN_CLUB"
const joinClub_reducer = (state, action) =>
{
    switch (action.type)
    {
        case JOIN_CLUB:
        {

            // enter_club('club_naem');
            // пока не робит как вставить путь а? стой а че это за enter club
            return state
        }
        default:
            return state
    }

}
export const joinClubActionCreator = () =>
{
    return {
        type: JOIN_CLUB
    }

}
export default joinClub_reducer