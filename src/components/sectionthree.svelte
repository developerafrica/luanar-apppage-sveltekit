<script>
    class CardsObj{
        constructor(nmP, dsP, svP){
            this.name = nmP;
            this.discription = dsP;
            this.svg = svP;
        }
    }

    let cards = [
        new CardsObj("reminder", "set your reminders ", "/Group 342.svg"),
        new CardsObj("theme", "toggle between light and dark modes", "/Group 355.svg"),
        new CardsObj("time", "easly view the time and date through the application", "/Group 354.svg"),
    ]
</script>

<div class="cards">
    <header>
        <div class="hd">
            <h1>requested features</h1>
        </div>
    </header>
    <div class="cds">
        {#each cards as cd}
        <div class="card">
            <div class="cd">
                <header>
                    <h1>{cd.name}</h1>
                    <p>{cd.discription}</p>
                </header>
                <main>
                    <div class="svg">
                        <img src={cd.svg} alt="">
                    </div>
                </main>
            </div>
        </div>
        {/each}
        and more ...
    </div>
</div>
<style lang="scss">
    .cards{
        header{
            .hd{
                h1{
                    text-align: end;
                    padding: 1rem;
                    @include font(var(--tc), 1.5rem, 600)
                }
            }
        }
        .cds{
            .card{
                margin: 2rem 1rem;
                border-radius: 1px;

                .cd{
                    padding: 1.5rem;
                    header{
                        padding: 1rem;

                        h1{
                            @include font(var(--tc), 1.5rem, 500);
                            
                        }
                        p{
                            @include font(var(--tc), 1.4rem, 450);

                        }
                    }
                    main{
                        text-align: center;
                    }

                }
            }
        }
    }
</style>