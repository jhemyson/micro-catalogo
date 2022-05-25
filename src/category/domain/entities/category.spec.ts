import { Category, CategoryProperties } from './category'

describe("Category Unit Tests", () => {
  test("constructor of category", () => {
    const props: CategoryProperties = {
      name: 'Movie', 
      description: 'some description', 
      is_active: true, 
      created_at: new Date,
    }

    const category = new Category(props)

    expect(category.props).toStrictEqual(props)
  })
})