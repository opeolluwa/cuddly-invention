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
        userTheme: "light-theme",
        newMessage: "",
        messages: [] as Array<any>
    }),

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
        // add message to the chat ui
        sendMessage() {
            const payload: any = {
                user: "me",
                timestamp: new Date().getTime(),
                message: this.newMessage,
            };
            this.messages.push(payload);
            console.log(JSON.stringify(payload));

            this.newMessage = "";
        },
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
    <div>
        <main>
            <!-- the header-->
            <DashboardHeader @open-sidebar="showSidebar = !showSidebar" />
            <!--inject all views here-->
            <div>
                <div id="conversation">
                    <!-- messages {{ messages }} -->
                </div>
                <form action="" id="message__box" @submit="sendMessage">
                    <div id="input__field">
                        <input type="text" placeholder="type a message" v-model="newMessage">
                        <Icon icon="mdi:send" id="send__icon" @click="sendMessage" />
                        <Icon icon="mdi:smile" id="send__icon" @click="sendMessage" />

                    </div>
                </form>

            </div>
        </main>
    </div>
</template>

<style scoped>
main {
    background-image: url("@/assets/img/bg/wallpaper.jpg"), linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .95));
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    height: 100vh !important;
    position: relative;
}

#conversation {
    color: #fff;
    padding: 5px 10px;
}



#send__icon {
    position: absolute;
    right: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
    color: var(--secondary);
    font-size: 1.5rem;
    cursor: pointer;
}

#input__field {
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
}

#message__box {
    width: 90%;
    display: flex;
    text-align: center;
    min-height: calc(100vh - 30px);
    margin: 0 auto;
}



#message__box input {
    width: 90%;
    background-color: var(--border-color);
    padding: 10.5px 10px;
    border-radius: 25px;
    padding-left: 15px;
    margin: 0 auto;
}

#message__box ::placeholder {
    font-size: 13.5px;
    padding-left: 15px;
}

#message__box input {
    /* width: 500px; */
    width: 100%;
    height: 50px;
    border-radius: 8px;
    padding: 7px 25px 7px 25px;
    border: 1.5px solid var(--border-color);
    border-radius: 5px;
    display: block;
    font-size: 14px;
}

#message__box input::placeholder {
    display: inline-block;
    letter-spacing: 1.25px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
}

#message__box input:focus {
    outline: none;
    border: none;
}
</style>
