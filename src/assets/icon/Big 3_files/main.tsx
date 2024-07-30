import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=c844f21b"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=c844f21b"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=c844f21b"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import "/src/index.css";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=c844f21b";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=c844f21b";
import { ErrorPage } from "/src/pages/ErrorPage/ErrorPage.tsx";
import { TeamsPage } from "/src/pages/teams/TeamsPage/TeamsPage.tsx?t=1722347303743";
import { PlayersPage } from "/src/pages/players/PlayersPage/PlayersPage.tsx?t=1722347367175";
import { MainLayout } from "/src/pages/layout/MainLayout/MainLayout.tsx";
import { AuthLayout } from "/src/pages/layout/AuthLayout/AuthLayout.tsx";
import { LogInPage } from "/src/pages/authorization/LogInPage/LogInPage.tsx";
import { SignUpPage } from "/src/pages/authorization/SignUpPage/SignUpPage.tsx";
import { RequireAuth } from "/src/api/helpers/RequireAuth.tsx";
import { store } from "/src/core/redux/store/store.ts";
import EditProfilePage from "/src/pages/EditProfilePage/EditProfilePage.tsx";
import TeamForm from "/src/pages/teams/components/TeamForm/TeamForm.tsx";
import PlayerForm from "/src/pages/players/components/PlayerForm/PlayerForm.tsx?t=1722344794135";
import { TeamDetailPage } from "/src/pages/teams/components/TeamDetailPage/TeamDetailPage.tsx";
import PlayerDetailPage from "/src/pages/players/components/PlayerDetailPage/PlayerDetailPage.tsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: /*#__PURE__*/ _jsxDEV(RequireAuth, {
            children: /*#__PURE__*/ _jsxDEV(MainLayout, {}, void 0, false, {
                fileName: "C:/big3-admin/src/main.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "C:/big3-admin/src/main.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this),
        children: [
            {
                path: "teams",
                element: /*#__PURE__*/ _jsxDEV(TeamsPage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 32,
                    columnNumber: 18
                }, this)
            },
            {
                path: "teams/add_new_team",
                element: /*#__PURE__*/ _jsxDEV(TeamForm, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 36,
                    columnNumber: 18
                }, this)
            },
            {
                path: "teams/:id",
                element: /*#__PURE__*/ _jsxDEV(TeamDetailPage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 40,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/teams/update/:id",
                element: /*#__PURE__*/ _jsxDEV(TeamForm, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 44,
                    columnNumber: 18
                }, this)
            },
            {
                path: "players",
                element: /*#__PURE__*/ _jsxDEV(PlayersPage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 48,
                    columnNumber: 18
                }, this)
            },
            {
                path: "players/add_new_player",
                element: /*#__PURE__*/ _jsxDEV(PlayerForm, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 52,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/players/update/:id",
                element: /*#__PURE__*/ _jsxDEV(PlayerForm, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 56,
                    columnNumber: 18
                }, this)
            },
            {
                path: "players/:id",
                element: /*#__PURE__*/ _jsxDEV(PlayerDetailPage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 61,
                    columnNumber: 18
                }, this)
            },
            {
                path: "editProfile",
                element: /*#__PURE__*/ _jsxDEV(EditProfilePage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 65,
                    columnNumber: 18
                }, this)
            }
        ]
    },
    {
        path: "/auth",
        element: /*#__PURE__*/ _jsxDEV(AuthLayout, {}, void 0, false, {
            fileName: "C:/big3-admin/src/main.tsx",
            lineNumber: 71,
            columnNumber: 14
        }, this),
        children: [
            {
                path: "signIn",
                element: /*#__PURE__*/ _jsxDEV(LogInPage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 75,
                    columnNumber: 18
                }, this)
            },
            {
                path: "signUp",
                element: /*#__PURE__*/ _jsxDEV(SignUpPage, {}, void 0, false, {
                    fileName: "C:/big3-admin/src/main.tsx",
                    lineNumber: 79,
                    columnNumber: 18
                }, this)
            }
        ]
    },
    {
        path: "*",
        element: /*#__PURE__*/ _jsxDEV(ErrorPage, {}, void 0, false, {
            fileName: "C:/big3-admin/src/main.tsx",
            lineNumber: 85,
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
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "C:/big3-admin/src/main.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "C:/big3-admin/src/main.tsx",
    lineNumber: 90,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJSb3V0ZXIsIFJvdXRlclByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBFcnJvclBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9FcnJvclBhZ2UvRXJyb3JQYWdlLnRzeFwiO1xuaW1wb3J0IHsgVGVhbXNQYWdlIH0gZnJvbSBcIi4vcGFnZXMvdGVhbXMvVGVhbXNQYWdlL1RlYW1zUGFnZS50c3hcIjtcbmltcG9ydCB7IFBsYXllcnNQYWdlIH0gZnJvbSBcIi4vcGFnZXMvcGxheWVycy9QbGF5ZXJzUGFnZS9QbGF5ZXJzUGFnZS50c3hcIjtcbmltcG9ydCB7IE1haW5MYXlvdXQgfSBmcm9tIFwiLi9wYWdlcy9sYXlvdXQvTWFpbkxheW91dC9NYWluTGF5b3V0LnRzeFwiO1xuaW1wb3J0IHsgQXV0aExheW91dCB9IGZyb20gXCIuL3BhZ2VzL2xheW91dC9BdXRoTGF5b3V0L0F1dGhMYXlvdXQudHN4XCI7XG5pbXBvcnQgeyBMb2dJblBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9hdXRob3JpemF0aW9uL0xvZ0luUGFnZS9Mb2dJblBhZ2UudHN4XCI7XG5pbXBvcnQgeyBTaWduVXBQYWdlIH0gZnJvbSBcIi4vcGFnZXMvYXV0aG9yaXphdGlvbi9TaWduVXBQYWdlL1NpZ25VcFBhZ2UudHN4XCI7XG5pbXBvcnQgeyBSZXF1aXJlQXV0aCB9IGZyb20gXCIuL2FwaS9oZWxwZXJzL1JlcXVpcmVBdXRoLnRzeFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi9jb3JlL3JlZHV4L3N0b3JlL3N0b3JlLnRzXCI7XG5pbXBvcnQgRWRpdFByb2ZpbGVQYWdlIGZyb20gXCIuL3BhZ2VzL0VkaXRQcm9maWxlUGFnZS9FZGl0UHJvZmlsZVBhZ2UudHN4XCI7XG5pbXBvcnQgVGVhbUZvcm0gZnJvbSBcIi4vcGFnZXMvdGVhbXMvY29tcG9uZW50cy9UZWFtRm9ybS9UZWFtRm9ybS50c3hcIjtcbmltcG9ydCBQbGF5ZXJGb3JtIGZyb20gXCIuL3BhZ2VzL3BsYXllcnMvY29tcG9uZW50cy9QbGF5ZXJGb3JtL1BsYXllckZvcm0udHN4XCI7XG5pbXBvcnQgeyBUZWFtRGV0YWlsUGFnZSB9IGZyb20gXCIuL3BhZ2VzL3RlYW1zL2NvbXBvbmVudHMvVGVhbURldGFpbFBhZ2UvVGVhbURldGFpbFBhZ2UudHN4XCI7XG5pbXBvcnQgUGxheWVyRGV0YWlsUGFnZSBmcm9tIFwiLi9wYWdlcy9wbGF5ZXJzL2NvbXBvbmVudHMvUGxheWVyRGV0YWlsUGFnZS9QbGF5ZXJEZXRhaWxQYWdlLnRzeFwiO1xuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFtcbiAge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIGVsZW1lbnQ6IChcbiAgICAgIDxSZXF1aXJlQXV0aD5cbiAgICAgICAgPE1haW5MYXlvdXQgLz5cbiAgICAgIDwvUmVxdWlyZUF1dGg+XG4gICAgKSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcInRlYW1zXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxUZWFtc1BhZ2UgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInRlYW1zL2FkZF9uZXdfdGVhbVwiLFxuICAgICAgICBlbGVtZW50OiA8VGVhbUZvcm0gLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInRlYW1zLzppZFwiLFxuICAgICAgICBlbGVtZW50OiA8VGVhbURldGFpbFBhZ2UgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi90ZWFtcy91cGRhdGUvOmlkXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxUZWFtRm9ybSAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwicGxheWVyc1wiLFxuICAgICAgICBlbGVtZW50OiA8UGxheWVyc1BhZ2UgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInBsYXllcnMvYWRkX25ld19wbGF5ZXJcIixcbiAgICAgICAgZWxlbWVudDogPFBsYXllckZvcm0gLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9wbGF5ZXJzL3VwZGF0ZS86aWRcIixcbiAgICAgICAgZWxlbWVudDogPFBsYXllckZvcm0gLz4sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwicGxheWVycy86aWRcIixcbiAgICAgICAgZWxlbWVudDogPFBsYXllckRldGFpbFBhZ2UgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcImVkaXRQcm9maWxlXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxFZGl0UHJvZmlsZVBhZ2UgLz4sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9hdXRoXCIsXG4gICAgZWxlbWVudDogPEF1dGhMYXlvdXQgLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJzaWduSW5cIixcbiAgICAgICAgZWxlbWVudDogPExvZ0luUGFnZSAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwic2lnblVwXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxTaWduVXBQYWdlIC8+LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIqXCIsXG4gICAgZWxlbWVudDogPEVycm9yUGFnZSAvPixcbiAgfSxcbl0pO1xuXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSEpLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiY3JlYXRlQnJvd3NlclJvdXRlciIsIlJvdXRlclByb3ZpZGVyIiwiUHJvdmlkZXIiLCJFcnJvclBhZ2UiLCJUZWFtc1BhZ2UiLCJQbGF5ZXJzUGFnZSIsIk1haW5MYXlvdXQiLCJBdXRoTGF5b3V0IiwiTG9nSW5QYWdlIiwiU2lnblVwUGFnZSIsIlJlcXVpcmVBdXRoIiwic3RvcmUiLCJFZGl0UHJvZmlsZVBhZ2UiLCJUZWFtRm9ybSIsIlBsYXllckZvcm0iLCJUZWFtRGV0YWlsUGFnZSIsIlBsYXllckRldGFpbFBhZ2UiLCJyb3V0ZXIiLCJwYXRoIiwiZWxlbWVudCIsImNoaWxkcmVuIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7QUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsT0FBT0MsY0FBYyxtQkFBbUI7QUFDeEMsT0FBTyxjQUFjO0FBQ3JCLFNBQVNDLG1CQUFtQixFQUFFQyxjQUFjLFFBQVEsbUJBQW1CO0FBQ3ZFLFNBQVNDLFFBQVEsUUFBUSxjQUFjO0FBQ3ZDLFNBQVNDLFNBQVMsUUFBUSxrQ0FBa0M7QUFDNUQsU0FBU0MsU0FBUyxRQUFRLHdDQUF3QztBQUNsRSxTQUFTQyxXQUFXLFFBQVEsOENBQThDO0FBQzFFLFNBQVNDLFVBQVUsUUFBUSwyQ0FBMkM7QUFDdEUsU0FBU0MsVUFBVSxRQUFRLDJDQUEyQztBQUN0RSxTQUFTQyxTQUFTLFFBQVEsZ0RBQWdEO0FBQzFFLFNBQVNDLFVBQVUsUUFBUSxrREFBa0Q7QUFDN0UsU0FBU0MsV0FBVyxRQUFRLGdDQUFnQztBQUM1RCxTQUFTQyxLQUFLLFFBQVEsOEJBQThCO0FBQ3BELE9BQU9DLHFCQUFxQiw4Q0FBOEM7QUFDMUUsT0FBT0MsY0FBYyxpREFBaUQ7QUFDdEUsT0FBT0MsZ0JBQWdCLHVEQUF1RDtBQUM5RSxTQUFTQyxjQUFjLFFBQVEsNkRBQTZEO0FBQzVGLE9BQU9DLHNCQUFzQixtRUFBbUU7QUFFaEcsTUFBTUMsU0FBU2pCLG9CQUFvQjtJQUNqQztRQUNFa0IsTUFBTTtRQUNOQyx1QkFDRSxRQUFDVDtzQkFDQyxjQUFBLFFBQUNKOzs7Ozs7Ozs7O1FBR0xjLFVBQVU7WUFDUjtnQkFDRUYsTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ2Y7Ozs7O1lBQ1o7WUFDQTtnQkFDRWMsTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ047Ozs7O1lBQ1o7WUFDQTtnQkFDRUssTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ0o7Ozs7O1lBQ1o7WUFDQTtnQkFDRUcsTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ047Ozs7O1lBQ1o7WUFDQTtnQkFDRUssTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ2Q7Ozs7O1lBQ1o7WUFDQTtnQkFDRWEsTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ0w7Ozs7O1lBQ1o7WUFDQTtnQkFDRUksTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ0w7Ozs7O1lBQ1o7WUFFQTtnQkFDRUksTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ0g7Ozs7O1lBQ1o7WUFDQTtnQkFDRUUsTUFBTTtnQkFDTkMsdUJBQVMsUUFBQ1A7Ozs7O1lBQ1o7U0FDRDtJQUNIO0lBQ0E7UUFDRU0sTUFBTTtRQUNOQyx1QkFBUyxRQUFDWjs7Ozs7UUFDVmEsVUFBVTtZQUNSO2dCQUNFRixNQUFNO2dCQUNOQyx1QkFBUyxRQUFDWDs7Ozs7WUFDWjtZQUNBO2dCQUNFVSxNQUFNO2dCQUNOQyx1QkFBUyxRQUFDVjs7Ozs7WUFDWjtTQUNEO0lBQ0g7SUFDQTtRQUNFUyxNQUFNO1FBQ05DLHVCQUFTLFFBQUNoQjs7Ozs7SUFDWjtDQUNEO0FBRURKLFNBQVNzQixVQUFVLENBQUNDLFNBQVNDLGNBQWMsQ0FBQyxTQUFVQyxNQUFNLGVBQzFELFFBQUMxQixNQUFNMkIsVUFBVTtjQUNmLGNBQUEsUUFBQ3ZCO1FBQVNTLE9BQU9BO2tCQUNmLGNBQUEsUUFBQ1Y7WUFBZWdCLFFBQVFBIn0=