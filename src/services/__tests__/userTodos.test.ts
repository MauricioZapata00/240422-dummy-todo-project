import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import { getUserTodos } from '..'


describe('userNotifications should works', () => {

    let mockedAxios = new MockAdapter(axios)


    afterEach(() => {
        mockedAxios.reset()
    })
    

    test('getUserTodos should fetches data', async () => {
        const URL_FOR_TEST = "something"

        interface UserTodo {
            todoId: string,
            name: string
        }
        interface MockedResponseType {
            responseTodos: UserTodo[]
        }
        const mockedResponse: UserTodo[] = [
            {
                todoId: "1",
                name: "mocked name for test"
            }
        ];
        const mockedPayload: MockedResponseType = {
            responseTodos: mockedResponse
        };
        
        
        mockedAxios.onGet(process.env.URL_NOTIFICATIONS_API + "/" + URL_FOR_TEST)
        .reply(200, mockedPayload.responseTodos)


        const underTestResult = await getUserTodos(URL_FOR_TEST)

        expect(underTestResult.responseNotifications).toEqual(mockedPayload.responseTodos)
    })

    test('getUserTodos should returns error', async () => {
        const URL_FOR_TEST = "shouldError";
        const expectedError = new Error("Request failed with status code 400");
            
        mockedAxios.onGet(process.env.URL_NOTIFICATIONS_API + "/" + URL_FOR_TEST)
        .reply(400, expectedError)

        const underTestResult = await getUserTodos(URL_FOR_TEST)

        expect(underTestResult.responseNotifications).toEqual(expectedError)
    })
})

