import { wait } from "@/helpers"
import { EventsTableData } from "@/api/models/EventsTableData"
import { eventsTableDataSchema } from '../dataSchema'
import { generateArrayData } from "../helpers"

export const getEventsTableData = async () => {
    await wait(500)
    const generatedData = generateArrayData(eventsTableDataSchema())
    const result = EventsTableData.parseFromDTO(generatedData)
    console.log('$$$ api/events | getEventsTableData', result)
    return result
    throw new Error(
    'Excepteur incididunt consectetur ullamco amet exercitation aliquip ea do excepteur aliqua et. Aliquip duis aliquip elit cupidatat tempor. Proident labore aute culpa non qui reprehenderit Lorem aute irure anim consequat non eiusmod magna. Do exercitation veniam deserunt fugiat veniam ea sunt labore magna cupidatat.Ipsum magna magna amet ullamco dolore occaecat nisi officia aliqua labore. Culpa cupidatat nostrud eu aute consectetur aliqua velit cillum ex laboris consequat. Amet ea sit sunt fugiat ipsum id. Cillum exercitation incididunt amet veniam deserunt sint est Lorem sint consequat aliqua deserunt. Do id cillum ullamco duis esse in qui nisi. Consequat excepteur sit Lorem culpa occaecat consequat velit culpa voluptate non.Labore ut sint ad et in elit dolore commodo adipisicing proident. Amet non dolor cillum fugiat eu occaecat. Nostrud ea in in pariatur fugiat adipisicing est est culpa in adipisicing.Cillum ad officia quis eiusmod eiusmod. Laborum commodo ad veniam aliquip sint deserunt ullamco sit. Voluptate officia nulla laboris eiusmod minim. Sint consectetur exercitation laborum occaecat id nulla voluptate exercitation incididunt nisi est qui consequat. Dolor dolor cillum dolore eu ea dolore nulla. Adipisicing fugiat adipisicing dolor pariatur veniam quis quis incididunt ut eu. Labore commodo amet nulla sit aliquip quis Lorem tempor enim occaecat consequat est labore.Ea ipsum dolor irure occaecat magna fugiat. Dolor velit qui magna id veniam quis quis sint deserunt culpa tempor. Ut officia reprehenderit enim eu officia non exercitation deserunt.Pariatur esse elit deserunt est magna id. Minim duis id amet esse enim nulla mollit et adipisicing. Dolore aute fugiat qui elit dolore adipisicing et consequat.Aliquip quis tempor ullamco excepteur cupidatat do nulla aliqua aliqua eiusmod. Velit est qui aute sunt aliquip do ea in quis dolore exercitation cupidatat. Occaecat nisi excepteur magna voluptate anim. Voluptate laboris laborum dolor magna occaecat deserunt. Irure anim ea cillum mollit magna enim elit laboris. Magna nisi culpa laborum nulla.Ex eu fugiat in ad incididunt culpa amet proident ullamco. Id quis do aute mollit voluptate nulla veniam qui ipsum magna eiusmod exercitation duis. Ipsum id sunt adipisicing minim excepteur aliquip ex sint proident irure nisi ex cupidatat. In quis amet exercitation ipsum nulla enim tempor.Dolor ipsum nisi irure anim nulla quis laboris. Tempor laboris do dolore elit officia mollit dolore mollit.'
    + 'Anim mollit dolor minim in occaecat ad ipsum.'
    + 'Culpa officia id esse consequat sint elit eu sit quis occaecat.'
    + 'Est aute veniam quis ullamco est dolor id sunt et cupidatat quis.'
    + 'Fugiat elit proident consequat ut ea enim deserunt elit officia qui duis id fugiat labore. Id duis reprehenderit aliquip labore pariatur.'
    + 'Lorem ipsum ipsum reprehenderit et enim duis commodo ullamco.'
    + 'Nisi irure id qui voluptate culpa voluptate nostrud excepteur labore elit commodo deserunt.'
    + 'Esse sunt commodo cillum nostrud elit esse excepteur. Minim sunt commodo ut ex. Mollit dolor nostrud magna ea.'
    + 'Excepteur incididunt consectetur ullamco amet exercitation aliquip ea do excepteur aliqua et. Aliquip duis aliquip elit cupidatat tempor. Proident labore aute culpa non qui reprehenderit Lorem aute irure anim consequat non eiusmod magna. Do exercitation veniam deserunt fugiat veniam ea sunt labore magna cupidatat.Ipsum magna magna amet ullamco dolore occaecat nisi officia aliqua labore. Culpa cupidatat nostrud eu aute consectetur aliqua velit cillum ex laboris consequat. Amet ea sit sunt fugiat ipsum id. Cillum exercitation incididunt amet veniam deserunt sint est Lorem sint consequat aliqua deserunt. Do id cillum ullamco duis esse in qui nisi. Consequat excepteur sit Lorem culpa occaecat consequat velit culpa voluptate non.Labore ut sint ad et in elit dolore commodo adipisicing proident. Amet non dolor cillum fugiat eu occaecat. Nostrud ea in in pariatur fugiat adipisicing est est culpa in adipisicing.Cillum ad officia quis eiusmod eiusmod. Laborum commodo ad veniam aliquip sint deserunt ullamco sit. Voluptate officia nulla laboris eiusmod minim. Sint consectetur exercitation laborum occaecat id nulla voluptate exercitation incididunt nisi est qui consequat. Dolor dolor cillum dolore eu ea dolore nulla. Adipisicing fugiat adipisicing dolor pariatur veniam quis quis incididunt ut eu. Labore commodo amet nulla sit aliquip quis Lorem tempor enim occaecat consequat est labore.Ea ipsum dolor irure occaecat magna fugiat. Dolor velit qui magna id veniam quis quis sint deserunt culpa tempor. Ut officia reprehenderit enim eu officia non exercitation deserunt.Pariatur esse elit deserunt est magna id. Minim duis id amet esse enim nulla mollit et adipisicing. Dolore aute fugiat qui elit dolore adipisicing et consequat.Aliquip quis tempor ullamco excepteur cupidatat do nulla aliqua aliqua eiusmod. Velit est qui aute sunt aliquip do ea in quis dolore exercitation cupidatat. Occaecat nisi excepteur magna voluptate anim. Voluptate laboris laborum dolor magna occaecat deserunt. Irure anim ea cillum mollit magna enim elit laboris. Magna nisi culpa laborum nulla.Ex eu fugiat in ad incididunt culpa amet proident ullamco. Id quis do aute mollit voluptate nulla veniam qui ipsum magna eiusmod exercitation duis. Ipsum id sunt adipisicing minim excepteur aliquip ex sint proident irure nisi ex cupidatat. In quis amet exercitation ipsum nulla enim tempor.Dolor ipsum nisi irure anim nulla quis laboris. Tempor laboris do dolore elit officia mollit dolore mollit.'
    + 'Anim mollit dolor minim in occaecat ad ipsum.'
    + 'Culpa officia id esse consequat sint elit eu sit quis occaecat.'
    + 'Est aute veniam quis ullamco est dolor id sunt et cupidatat quis.'
    + 'Fugiat elit proident consequat ut ea enim deserunt elit officia qui duis id fugiat labore. Id duis reprehenderit aliquip labore pariatur.'
    + 'Lorem ipsum ipsum reprehenderit et enim duis commodo ullamco.'
    + 'Nisi irure id qui voluptate culpa voluptate nostrud excepteur labore elit commodo deserunt.'
    + 'Esse sunt commodo cillum nostrud elit esse excepteur. Minim sunt commodo ut ex. Mollit dolor nostrud magna ea.')
    return result
}