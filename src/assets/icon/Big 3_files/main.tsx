import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=8d87fd5a"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=8d87fd5a"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=8d87fd5a"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import "/src/index.css";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=8d87fd5a";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=8d87fd5a";
import { ErrorPage } from "/src/pages/ErrorPage/ErrorPage.tsx";
import { TeamsPage } from "/src/pages/teams/TeamsPage/TeamsPage.tsx?t=1720856029408";
import { PlayersPage } from "/src/pages/players/PlayersPage/PlayersPage.tsx?t=1720852795813";
import { MainLayout } from "/src/pages/layout/MainLayout/MainLayout.tsx";
import { AuthLayout } from "/src/pages/layout/AuthLayout/AuthLayout.tsx";
import { LogInPage } from "/src/pages/authorization/LogInPage/LogInPage.tsx";
import { SignUpPage } from "/src/pages/authorization/SignUpPage/SignUpPage.tsx";
import { RequireAuth } from "/src/api/helpers/RequireAuth.tsx";
import { store } from "/src/core/redux/store/store.ts?t=1720852710410";
import EditProfilePage from "/src/pages/EditProfilePage/EditProfilePage.tsx";
import TeamForm from "/src/pages/teams/components/TeamForm/TeamForm.tsx?t=1720857122352";
const router = createBrowserRouter([
    {
        path: "/",
        element: /*#__PURE__*/ _jsxDEV(RequireAuth, {
            children: /*#__PURE__*/ _jsxDEV(MainLayout, {}, void 0, false, {
                fileName: "C:/big3-admin/src/main.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "C:/big3-admin/src/main.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this),
        children: [
            {
                path: "teams",
                element: /*#__PURE__*/ _jsxDEV(TeamsPage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 29,
                    columnNumber: 18
                }, this),
                children: [
                    {
                        path: "/Add_new_team",
                        element: /*#__PURE__*/ _jsxDEV(TeamForm, {}, void 0, false, {
                            fileName: "C:/big3-admin/src/main.tsx",
                            lineNumber: 33,
                            columnNumber: 22
                        }, this)
                    }
                ]
            },
            {
                path: "players",
                element: /*#__PURE__*/ _jsxDEV(PlayersPage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 39,
                    columnNumber: 18
                }, this)
            },
            {
                path: "editProfile",
                element: /*#__PURE__*/ _jsxDEV(EditProfilePage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 43,
                    columnNumber: 18
                }, this)
            }
        ]
    },
    {
        path: "/auth",
        element: /*#__PURE__*/ _jsxDEV(AuthLayout, {}, void 0, false, {
            fileName: "C:/big3-admin/src/main.tsx",
            lineNumber: 49,
            columnNumber: 14
        }, this),
        children: [
            {
                path: "signIn",
                element: /*#__PURE__*/ _jsxDEV(LogInPage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 53,
                    columnNumber: 18
                }, this)
            },
            {
                path: "signUp",
                element: /*#__PURE__*/ _jsxDEV(SignUpPage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 57,
                    columnNumber: 18
                }, this)
            }
        ]
    },
    {
        path: "*",
        element: /*#__PURE__*/ _jsxDEV(ErrorPage, {}, void 0, false, {
            fileName: "C:/big3-admin/src/main.tsx",
            lineNumber: 63,
            columnNumber: 14
        }, this)
    }
]);
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/ _jsxDEV(React.StrictMode, {
    children: /*#__PURE__*/ _jsxDEV(Provider, {
        store: store,
        children: /*#__PURE__*/ _jsxDEV(RouterProvider, {
            router: router
        }, void 0, false, {
            fileName: "C:/big3-admin/src/main.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "C:/big3-admin/src/main.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "C:/big3-admin/src/main.tsx",
    lineNumber: 68,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJSb3V0ZXIsIFJvdXRlclByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBFcnJvclBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9FcnJvclBhZ2UvRXJyb3JQYWdlLnRzeFwiO1xuaW1wb3J0IHsgVGVhbXNQYWdlIH0gZnJvbSBcIi4vcGFnZXMvdGVhbXMvVGVhbXNQYWdlL1RlYW1zUGFnZS50c3hcIjtcbmltcG9ydCB7IFBsYXllcnNQYWdlIH0gZnJvbSBcIi4vcGFnZXMvcGxheWVycy9QbGF5ZXJzUGFnZS9QbGF5ZXJzUGFnZS50c3hcIjtcbmltcG9ydCB7IE1haW5MYXlvdXQgfSBmcm9tIFwiLi9wYWdlcy9sYXlvdXQvTWFpbkxheW91dC9NYWluTGF5b3V0LnRzeFwiO1xuaW1wb3J0IHsgQXV0aExheW91dCB9IGZyb20gXCIuL3BhZ2VzL2xheW91dC9BdXRoTGF5b3V0L0F1dGhMYXlvdXQudHN4XCI7XG5pbXBvcnQgeyBMb2dJblBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9hdXRob3JpemF0aW9uL0xvZ0luUGFnZS9Mb2dJblBhZ2UudHN4XCI7XG5pbXBvcnQgeyBTaWduVXBQYWdlIH0gZnJvbSBcIi4vcGFnZXMvYXV0aG9yaXphdGlvbi9TaWduVXBQYWdlL1NpZ25VcFBhZ2UudHN4XCI7XG5pbXBvcnQgeyBSZXF1aXJlQXV0aCB9IGZyb20gXCIuL2FwaS9oZWxwZXJzL1JlcXVpcmVBdXRoLnRzeFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi9jb3JlL3JlZHV4L3N0b3JlL3N0b3JlLnRzXCI7XG5pbXBvcnQgRWRpdFByb2ZpbGVQYWdlIGZyb20gXCIuL3BhZ2VzL0VkaXRQcm9maWxlUGFnZS9FZGl0UHJvZmlsZVBhZ2UudHN4XCI7XG5pbXBvcnQgVGVhbUZvcm0gZnJvbSBcIi4vcGFnZXMvdGVhbXMvY29tcG9uZW50cy9UZWFtRm9ybS9UZWFtRm9ybS50c3hcIjtcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBlbGVtZW50OiAoXG4gICAgICA8UmVxdWlyZUF1dGg+XG4gICAgICAgIDxNYWluTGF5b3V0IC8+XG4gICAgICA8L1JlcXVpcmVBdXRoPlxuICAgICksXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJ0ZWFtc1wiLFxuICAgICAgICBlbGVtZW50OiA8VGVhbXNQYWdlIC8+LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiL0FkZF9uZXdfdGVhbVwiLFxuICAgICAgICAgICAgZWxlbWVudDogPFRlYW1Gb3JtIC8+LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInBsYXllcnNcIixcbiAgICAgICAgZWxlbWVudDogPFBsYXllcnNQYWdlIC8+LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJlZGl0UHJvZmlsZVwiLFxuICAgICAgICBlbGVtZW50OiA8RWRpdFByb2ZpbGVQYWdlIC8+LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvYXV0aFwiLFxuICAgIGVsZW1lbnQ6IDxBdXRoTGF5b3V0IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwic2lnbkluXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxMb2dJblBhZ2UgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInNpZ25VcFwiLFxuICAgICAgICBlbGVtZW50OiA8U2lnblVwUGFnZSAvPixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiKlwiLFxuICAgIGVsZW1lbnQ6IDxFcnJvclBhZ2UgLz4sXG4gIH0sXG5dKTtcblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikhKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXJQcm92aWRlciIsIlByb3ZpZGVyIiwiRXJyb3JQYWdlIiwiVGVhbXNQYWdlIiwiUGxheWVyc1BhZ2UiLCJNYWluTGF5b3V0IiwiQXV0aExheW91dCIsIkxvZ0luUGFnZSIsIlNpZ25VcFBhZ2UiLCJSZXF1aXJlQXV0aCIsInN0b3JlIiwiRWRpdFByb2ZpbGVQYWdlIiwiVGVhbUZvcm0iLCJyb3V0ZXIiLCJwYXRoIiwiZWxlbWVudCIsImNoaWxkcmVuIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiO0FBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLGNBQWMsbUJBQW1CO0FBQ3hDLE9BQU8sY0FBYztBQUNyQixTQUFTQyxtQkFBbUIsRUFBRUMsY0FBYyxRQUFRLG1CQUFtQjtBQUN2RSxTQUFTQyxRQUFRLFFBQVEsY0FBYztBQUN2QyxTQUFTQyxTQUFTLFFBQVEsa0NBQWtDO0FBQzVELFNBQVNDLFNBQVMsUUFBUSx3Q0FBd0M7QUFDbEUsU0FBU0MsV0FBVyxRQUFRLDhDQUE4QztBQUMxRSxTQUFTQyxVQUFVLFFBQVEsMkNBQTJDO0FBQ3RFLFNBQVNDLFVBQVUsUUFBUSwyQ0FBMkM7QUFDdEUsU0FBU0MsU0FBUyxRQUFRLGdEQUFnRDtBQUMxRSxTQUFTQyxVQUFVLFFBQVEsa0RBQWtEO0FBQzdFLFNBQVNDLFdBQVcsUUFBUSxnQ0FBZ0M7QUFDNUQsU0FBU0MsS0FBSyxRQUFRLDhCQUE4QjtBQUNwRCxPQUFPQyxxQkFBcUIsOENBQThDO0FBQzFFLE9BQU9DLGNBQWMsaURBQWlEO0FBRXRFLE1BQU1DLFNBQVNkLG9CQUFvQjtJQUNqQztRQUNFZSxNQUFNO1FBQ05DLHVCQUNFLFFBQUNOO3NCQUNDLGNBQUEsUUFBQ0o7Ozs7Ozs7Ozs7UUFHTFcsVUFBVTtZQUNSO2dCQUNFRixNQUFNO2dCQUNOQyx1QkFBUyxRQUFDWjs7Ozs7Z0JBQ1ZhLFVBQVU7b0JBQ1I7d0JBQ0VGLE1BQU07d0JBQ05DLHVCQUFTLFFBQUNIOzs7OztvQkFDWjtpQkFDRDtZQUNIO1lBQ0E7Z0JBQ0VFLE1BQU07Z0JBQ05DLHVCQUFTLFFBQUNYOzs7OztZQUNaO1lBQ0E7Z0JBQ0VVLE1BQU07Z0JBQ05DLHVCQUFTLFFBQUNKOzs7OztZQUNaO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VHLE1BQU07UUFDTkMsdUJBQVMsUUFBQ1Q7Ozs7O1FBQ1ZVLFVBQVU7WUFDUjtnQkFDRUYsTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ1I7Ozs7O1lBQ1o7WUFDQTtnQkFDRU8sTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ1A7Ozs7O1lBQ1o7U0FDRDtJQUNIO0lBQ0E7UUFDRU0sTUFBTTtRQUNOQyx1QkFBUyxRQUFDYjs7Ozs7SUFDWjtDQUNEO0FBRURKLFNBQVNtQixVQUFVLENBQUNDLFNBQVNDLGNBQWMsQ0FBQyxTQUFVQyxNQUFNLGVBQzFELFFBQUN2QixNQUFNd0IsVUFBVTtjQUNmLGNBQUEsUUFBQ3BCO1FBQVNTLE9BQU9BO2tCQUNmLGNBQUEsUUFBQ1Y7WUFBZWEsUUFBUUEifQ==