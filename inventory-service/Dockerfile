# Build (Maven kullanarak JAR üretir):
FROM maven:3.9-eclipse-temurin-21-alpine AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Run (Sadece JAR dosyasını çalıştırır)
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
# Build aşamasında üretilen JAR dosyasını kopyalar:
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

