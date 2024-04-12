export function useAuthenticated()
{
    const user = localStorage.getItem("user");
    return !!user;
}