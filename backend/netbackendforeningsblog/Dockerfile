FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["backend/netbackendforeningsblog/netbackendforeningsblog.csproj", "netbackendforeningsblog/"]
RUN dotnet restore "netbackendforeningsblog/netbackendforeningsblog.csproj"
COPY . .
WORKDIR "/src/backend/netbackendforeningsblog"
RUN dotnet build "netbackendforeningsblog.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "netbackendforeningsblog.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "netbackendforeningsblog.dll"]

