import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const WithoutCustomHooks = () => {

    const [data, setData] = useState("")



    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data))


    })
    return (
        <View>
            <Text>Without CustomHooks</Text>

            <FlatList data={data}
                renderItem={({ item }) => <Text
                    style={{ paddingHorizontal: 16, paddingVertical: 24 }}>{item.title}</Text>}
                keyExtractor={(item) => item.id.toString()} />
        </View>
    )
}

export default WithoutCustomHooks