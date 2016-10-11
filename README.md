# fav-movies

demo Application!!

## Point the service application to SQL Server database

Go to appsettings.json file and uncomment the correct connectionstring:

`"DefaultConnection" : "Data Source = .; Initial Catalog = movieDB; Integrated Security = true"`

Go to startup.cs class and uncomment the sql db context:

`services.AddDbContext<MovieDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));`

## Enable the migrations and update the database

## Install angular modeules and build tools
`npm i`

## Start the angular build
`npm start`

## Start the server
Press `CTRL+F5` to start the server

## Point the service application to MY SQl Server in Ubuntu

Go to appsettings.json file and uncomment the correct connectionstring:

`"DefaultConnection" : "server = localhost; database = movieDB; uid = root; password = hansamali; sslmode = none"`
 
Go to startup.cs class and uncomment the my sql db context:

```typescript
var optionsBuilder = new DbContextOptionsBuilder<MovieDbContext>();`
optionsBuilder.UseMySQL(Configuration.GetConnectionString("DefaultConnection"));`

var context = new MovieDbContext(optionsBuilder.Options);
context.Database.EnsureCreated();

services.AddDbContext<MovieDbContext>(options => options.UseMySQL(Configuration.GetConnectionString("DefaultConnection")));
```
