import React, {Component} from 'react';
import CardHeader from "@material-ui/core/es/CardHeader/CardHeader";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Card from "@material-ui/core/Card";
import { withStyles} from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import ApplicantStat from "./ApplicantStat";

const styles = theme => ({
    avatar: {
        width: 150,
        height: 150,
    },
    root: {
        width: 300,
    },

});

class Applicant extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.root}>
                <CardHeader
                    action={
                        <Fab
                            color="primary"
                            aria-label="Edit"
                            size="small"
                            className={classes.editButton}
                        >
                            <Icon>edit_icon</Icon>
                        </Fab>
                    }
                    title={this.props.applicant.name}
                    subheader={this.props.applicant.contact}
                    />
                <CardContent>
                    <ApplicantStat
                        type={"scale"}
                        stat={"Intelligence"}
                        value={this.props.applicant.intelligence}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Applicant);