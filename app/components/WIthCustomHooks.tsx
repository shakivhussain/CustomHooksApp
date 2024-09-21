import { FlatList, Text, View } from "react-native"
import useFetch from "../hooks/useFetch";


const WithCustomHooks = () => {

    const data = useFetch("https://jsonplaceholder.typicode.com/todos")


    return (
        <View>

            <Text>With Hooks</Text>


            <FlatList data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text style={{ paddingVertical: 24 }}>{item.title}</Text>}
            />
        </View>
    )


}


export default WithCustomHooks;