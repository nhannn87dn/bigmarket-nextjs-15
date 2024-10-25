'use server'
export async function searchBarAction(prevState: any, formData: FormData) {
    try {
        const keyword = formData.get('keyword')
        console.log('keyword',keyword)
        // mutate data
        // revalidate cache
    } catch (e) {
        throw new Error('Failed to create task')
    }
    
}