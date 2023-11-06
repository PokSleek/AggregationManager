import { EventsTableData } from "./models/EventsTableData"
import { PATH } from "./path"
import { fetchWithAuth } from "./utils"

export const getEventsTableData = async () => {
    const response = await fetchWithAuth(PATH.EVENT)
    if (!response.ok) {
        const responseText = await response.text();
        throw new Error(`Error! status: ${response.status}, message: ${responseText}`);
    }
    
    const result = await response.json()
    return EventsTableData.parseFromDTO(result)
}