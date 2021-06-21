exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.timestamps(false, true)
    })

    .createTable('articles', (articles) => {
      articles.increments('article_id')
      articles.string('title', 200).notNullable()
      articles.string('preview', 500).notNullable()
      articles.string('story', 1000).notNullable()
      articles.string('category', 200).notNullable()
      articles.timestamps(false, true)
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('articles')
    .dropTableIfExists('users')
}
