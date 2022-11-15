<script lang="ts">
import DashboardHeaderVue from "@/components/DashboardHeader.vue";
import ViewLayoutVue from "@/components/ViewLayout.vue";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import { mapActions, mapState } from "pinia";
import { useDarkMode } from "@/stores/theme";
import { Icon } from "@iconify/vue";
export default defineComponent({
    components: {
        DashboardHeader: DashboardHeaderVue,
        ViewLayout: ViewLayoutVue,
        Icon
    },
    data: () => ({
        crumbs: ["Home", "Category", "Sub category"],
        showSidebar: false,
        userTheme: "light-theme"
    }),
    /**
     * before entering the route we check if the user is logged in
     * to do this, try to get the token from the  local storage
     * if token does not exists, redirect to login page
     * else use the token to make request to the server, if the server return a valid response, enter this routes else redirect to login page
     */
    /*beforeRouteEnter(to, from, next) {
      // async function checkBearerTokenValidity() {
      const token = localStorage.getItem("token");
      if (!token) {
        next("/login");
      } else {
        //try to get the user information from the server
        try {
          axios
            .get("/auth/me", {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((severResponse) => {
              const responseData = severResponse.data;
  
              if (responseData.success) {
                next(() => {
                  console.log("user is logged in ", from.name, to.name);
                  const desiredRoute = String(to.name);
                  router.push({ name: desiredRoute });
                });
              } else {
                localStorage.removeItem("token");
                router.push({ name: "auth" });
                console.log("something bad happened ");
              }
            });
  
          // console.log({ response });
        } catch (error: any) {
          console.log({ error: error.message });
          console.log("something bad happened ");
        }
      }
      // }
      // checkBearerTokenValidity();
    },
    */

    computed: {
        ...mapState(useAuthStore, ["authorizationToken", "userInformation"]),
        ...mapState(useDarkMode, ["enabledDarkMode"]),

        //breadcrumb
    },
    created() {
        this.makeAuthRequest();
    },
    mounted() {
        this.showSidebar = window.matchMedia("(max-width: 400px)").matches
            ? false
            : true;

        //the dark theme configuration
        let localTheme = localStorage.getItem("theme"); //gets stored theme value if any
        document.documentElement.setAttribute("data-theme", localTheme as string); // updates the data-theme attribute


        //  * get the refresh token every 20 minutes
        const refreshToken = () => {
            this.refreshToken();
        };
        window.setInterval(refreshToken, 1000 * 20 * 60);
    },
    methods: {
        ...mapActions(useAuthStore, {
            getUser: "getUserInformation",
            refreshToken: "getRefreshToken",
        }),
        ...mapActions(useDarkMode, ["toggleColorTheme"]),
        getTheme() {
            return localStorage.getItem("user-theme");
        },
        setTheme(theme: string) {
            localStorage.setItem("user-theme", theme);
            this.userTheme = theme;
            document.documentElement.className = theme;
        },



        //track bread crumb
        selected(crumb: any) {
            console.log(crumb);
        },
        /**
         * @function makeAuthRequest - make request to the server to get the user information
         * @returns {userInformation} - returns the user information
         * @param {authorizationToken} - the authorization token
         */
        makeAuthRequest() {
            const token = String(this.authorizationToken);
            this.getUser(token);
        },
        isDeviceMobile() {
            /**
             * use JavaScript to detect if the device is mobile via media query
             * if device is mobile, return true, else return false
             * pass this function to watch lifecycle hook
             */
            const isMobileDevice = window.matchMedia("(max-width: 400px)").matches;
            if (!isMobileDevice) {
                return true;
            }
            // return false
        },
    },
});
</script>

<template>
    <div class="container">
        <main>
            <!-- the header-->
            <DashboardHeader @open-sidebar="showSidebar = !showSidebar" />

            <!--inject all views here-->
            <div id="view__box" :class="{ 'dark__mode': enabledDarkMode }">
                <form action="" id="message__box">
                    <input type="text" placeholder="type a message">
                </form>

            </div>
        </main>
    </div>
</template>

<style scoped>
#message__box {
    width: 100%;
    position: absolute;
    bottom: 10px;
    left: 0;
    align-items: center;
    margin: 0 auto;
}

#message__box form {
    width: 100%
}

#message__box input {
    width: 90%;
    background-color: var(--border-color);
    padding: 12.5px 10px;
    border-radius: 25px;
    padding-left: 15px;
}

#message__box ::placeholder {
    font-size: 13.5px;
    padding-left: 25px;
}


main {
    grid-area: content;
    height: 80vh;
    overflow-y: hidden;
    scrollbar-color: var(--primary);
}

main header {
    grid-area: header;
}



/**------------------styling on mobile devices----------------------- */
@media screen and (max-width: 768px) {
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    nav {
        /* height: unset !important; */
        /* padding-top: 55px; */
        position: fixed;
        z-index: 5000;
        top: 0;
        left: 0;
        width: 100%;
        box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
        -webkit-box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
        -moz-box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
        height: 90vh;
    }

    main {
        height: unset;
        overflow-y: scroll;
    }

    main header {
        height: unset;
    }

    main #view__box {
        grid-area: view;
        min-height: calc(100vh - 20px);
        padding-top: unset;
        margin-bottom: 25px;
    }
}
</style>
