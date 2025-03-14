import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, Image, ScrollView, Dimensions } from 'react-native';
import news_data from './news_data.json';
import NewsCards from './components/NewsCard';
import news_banner_data from './news_banner_data.json';

function App() {
    const renderNews = ({ item }: { item: any }) => <NewsCards news={item} />;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>İngilizce Öğreniyoruz</Text>
            <FlatList
                ListHeaderComponent={() => (
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {news_banner_data.map(bannerNews => (
                            <Image
                                style={styles.banner_image}
                                source={{ uri: bannerNews.imageUrl }}
                            />
                        ))}
                    </ScrollView>
                )}
                keyExtractor={(item) => item.u_id.toString()}
                data={news_data}
                renderItem={renderNews}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eceff1',

    },
    banner_image: {
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 2,
        margin:5
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 50,
    }

})
export default App;
